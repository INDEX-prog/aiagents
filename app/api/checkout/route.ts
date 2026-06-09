import { NextRequest, NextResponse } from "next/server";

// Stripe price IDs - these would be set in environment variables in production
const PRICE_IDS: Record<string, string> = {
  starter: process.env.STRIPE_STARTER_PRICE_ID || "price_starter",
  growth: process.env.STRIPE_GROWTH_PRICE_ID || "price_growth",
};

interface CheckoutRequestBody {
  planId: string;
  email: string;
  name: string;
  company: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as CheckoutRequestBody;
    const { planId, email, name, company } = body;

    // Validate required fields
    if (!planId || !email || !name || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate plan ID
    if (!PRICE_IDS[planId]) {
      return NextResponse.json(
        { error: "Invalid plan ID" },
        { status: 400 }
      );
    }

    // In production, this would create a Stripe checkout session:
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    // const session = await stripe.checkout.sessions.create({
    //   mode: 'subscription',
    //   payment_method_types: ['card'],
    //   line_items: [{
    //     price: PRICE_IDS[planId],
    //     quantity: 1,
    //   }],
    //   customer_email: email,
    //   metadata: { name, company },
    //   success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
    //   subscription_data: {
    //     trial_period_days: 14,
    //   },
    // });
    // return NextResponse.json({ url: session.url });

    // MVP: Return success for demo purposes
    // Replace with actual Stripe integration before going live
    return NextResponse.json({
      success: true,
      message: "Demo mode: In production, this would redirect to Stripe checkout",
      planId,
      email,
    });

  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
