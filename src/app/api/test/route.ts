// api/test/route.ts
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  try {
    return new NextResponse(
      JSON.stringify({
        code: 0,
        data: { res: "test" },
        msg: "succ",
      }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
