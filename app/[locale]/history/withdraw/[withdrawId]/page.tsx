
import getCurrentUser from "@/app/[locale]/actions/getCurrentUser";
import getUserById from "@/app/[locale]/actions/getUserById";
// import getCurrentAdmin from "@/app/actions/getCurrentAdmin";
import { redirect } from "next/navigation";
import { Role } from "@/prisma/generated/client";
import WithdrawClient from "./WithdrawClient";

interface IParams {
    withdrawId: any;
}

export default async function page({ params }: { params: IParams}) {
    const user = await getUserById({userId: params.withdrawId});
    const currentUser = await getCurrentUser();

    if(currentUser?.id === params.withdrawId){
        return <WithdrawClient user={currentUser}/>
    }

    if(currentUser?.role != Role.Admin){
      return redirect("/auth/login");
    }
  
    return (
        <WithdrawClient user={user}/>
    )
}