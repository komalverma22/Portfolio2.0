import { NextResponse } from "next/server";
import { z } from "zod";
import {PrismaClient} from "@/generated/prisma";
// import { PrismaClient } from "@prisma/client";

// Validate incoming payload

const prisma = new PrismaClient();
const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(190),
  message: z.string().min(5).max(5000),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = ContactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
// 
    const { name, email, message } = parsed.data;

    await prisma.contactMessage.create({
      data: { name, email, message },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

// Optional: quick check endpoint (use carefully / dev only)
export async function GET() {
  const latest = await prisma.contactMessage.findMany({
    orderBy: { sendMessageAt: "desc" },
    take: 20,
  });
  return NextResponse.json({ ok: true, data: latest });
}
