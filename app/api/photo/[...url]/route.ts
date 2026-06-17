import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{ url: string[] }>;
}

export async function GET(req: NextRequest, { params }: Props) {
  const { url } = await params;
  const response = await axios.get(
    `https://places.googleapis.com/v1/${url.join("/")}/media`,
    {
      params: {
        maxHeightPx: 400,
        maxWidthPx: 400,
        key: process.env.NEXT_PUBLIC_GOOGLE_PLACE_API,
        skipHttpRedirect: true,
      },
    },
  );

  return NextResponse.json(response.data);
}
