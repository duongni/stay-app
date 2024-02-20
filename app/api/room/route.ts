//create appi end point

import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Request body:", body); // Add this line to log the request body
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized, {status: 401}");
    }

    const room = await prismadb.room.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(room);
  } catch (error) {
    console.log("Error at /api/room POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}