import { NextResponse } from "next/server";

import { sendEmail } from "@/app/[locale]/libs/mailer";


export async function POST(
    request: Request,
  ): Promise<any> {
    const body = await request.json();
    const { 
      email,
     } = body;

    if (!email || typeof email !== 'string') {
    throw new Error('Invalid ID');
    }

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
          NextResponse.error();
        }
    });

  const emailRequest = await sendEmail({email: email, emailType: "VERIFY"})

  return NextResponse.json(emailRequest);
}


