import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

import prisma from '@/app/[locale]/libs/prismadb'
import getCurrentUser from "@/app/[locale]/actions/getCurrentUser";
import { Role } from "@/prisma/generated/client";

export async function POST(
  request: Request,
): Promise<any> {
  const currentUser = await getCurrentUser();

  if(currentUser?.role != Role.Admin){
    return null;
  }

  const body = await request.json();
  const { 
    title,
    image,
    content,
    theme
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  let safeTheme = [];
  
  if(theme.cryptoecosystem == true){
    safeTheme.push('Crypto Ecosystem')
  }
  if(theme.investment == true){
    safeTheme.push('Investment')
  }
  if(theme.bitcoin == true){
    safeTheme.push('Bitcoin')
  }
  
  
  const User = await prisma.blog.create({
    data: {
      image: image,
      title: title,
      content: content,
      theme: safeTheme
    },
  })
  
  return NextResponse.json(User);
}