import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

import prisma from '@/app/[locale]/libs/prismadb'

export async function POST(
  request: Request,
): Promise<any> {
  const body = await request.json();
  const { 
    username,
    firstname,
    lastname,
    email,
    phone,
    password,
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const hashedPassword = await bcrypt.hash(password, 12);

  const UpperCaseFirstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
  const UpperCaseLastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
  
  
  const User = await prisma.user.create({
    data: {
      email: email,
      hashedPassword: hashedPassword,
      firstname: UpperCaseFirstname,
      lastname: UpperCaseLastname,
      phone: phone,
      username: username,
      // Droebiti
      // emailVerified: new Date()
    },
  })
  
  return NextResponse.json(User);
}