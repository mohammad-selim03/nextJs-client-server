import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: "A small message from backend...",
      body: body,
    });
  } catch (error) {
    console.log("error", error);
  }
};
