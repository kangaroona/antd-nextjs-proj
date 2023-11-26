import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    return new NextResponse(
      JSON.stringify({
        code: 0,
        data: [
          {
            label: "Detail",
            key: "detail",
          },
          {
            label: "User",
            key: "user",
          },
          {
            label: "Hot",
            key: "hot",
            children: [
              {
                label: "week",
                key: "week",
              },
              {
                label: "Month",
                key: "Month",
              },
            ],
          },
        ],
        msg: "succ",
      }),
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
