
import getCurrentUser from "@/app/[locale]/actions/getCurrentUser";
import FillClient from "./FillClient";
import getUserById from "@/app/[locale]/actions/getUserById";
// import getCurrentAdmin from "@/app/actions/getCurrentAdmin";
import { redirect } from "next/navigation";
import { Role } from "@/prisma/generated/client";

interface IParams {
    fillId: any;
}

export default async function page({ params }: { params: IParams}) {
    const user = await getUserById({userId: params.fillId});
    const currentUser = await getCurrentUser();
  
    if(currentUser?.id === params.fillId){
        return <FillClient user={currentUser}/>
    }

    if(currentUser?.role != Role.Admin){
      return redirect("/auth/login");
    }
  
    return (
        <FillClient user={user}/>
    )
}