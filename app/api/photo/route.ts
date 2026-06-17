import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{ url: string }>;
}
export async function GET(req: NextRequest) {
  return NextResponse.json(req.url);
  //   try {
  //     const body = await req.json();
  //     console.log("handler");
  //     console.log(body);
  //     const response = await axios.get("https://places.googleapis.com/v1/", {
  //       params: {
  //         key: process.env.NEXT_PUBLIC_GOOGLE_PLACE_API,
  //       },
  //     });
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
}
