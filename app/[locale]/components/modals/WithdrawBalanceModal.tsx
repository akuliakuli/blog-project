'use client';

import { useState } from "react";

import Modal from "./Modal";
import useBalanceFillModal from '../../hooks/useBalanceFillModal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import useWithdrawBalanceModal from "@/app/[locale]/hooks/useWithdrawBalanceModal";


enum Steps {
    withdraw,
    emailRequest
}
const WithdrawBalanceModal = ({currentUser}: any) => {
  const withdrawBalanceModal = useWithdrawBalanceModal();
  const [isLoading, setLoading] = useState(false);
  const [steps, setSteps] = useState(Steps.withdraw)
  const router = useRouter();

  const { 
    register, 
    handleSubmit,
    control,
    watch,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
        defaultValues: {
          amount: 0,
        },
  });
  const amount = watch('amount')
  
  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setLoading(true)
    axios.post('/api/balance/withdraw', {
        amount: data.amount
    }).then(() => {
        setLoading(false);
        router.refresh();
        // withdrawBalanceModal.onClose()
        setSteps(Steps.emailRequest)
    }).catch((error) => {
        setLoading(false)
        toast.error('Something Went Wrong')
    })
  }
  let bodyContent;

  steps == Steps.withdraw && (
    bodyContent = (
      <>
        <h2>Your Balance: {currentUser.balance}$</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            <div className="bg-gray-300 w-[140px] flex justify-center items-center">
            <input type="number" className="border-0 bg-gray-300 p-2 outline outline-transparent focus:outline-transparent" min={5} max={currentUser.balance} placeholder="Amount" {...register("amount", {required: true})} />
            <label className="w-1/12">$</label>
            </div>

            <input type="submit" placeholder="Submit" disabled={isLoading}/>
        </form>
      </>
  ))

  steps == Steps.emailRequest && (
    bodyContent = (
      <>
        <h2>Your Balance: {currentUser.balance}$</h2>
        <h2>Check your email and please wait 24 hour we contact you</h2>
        <h2>-{amount}$</h2>
      </>
  ))

  return (
    <Modal
      isOpen={withdrawBalanceModal.isOpen}
      title={'Withdraw Money'}
      onClose={() => {
        withdrawBalanceModal.onClose()
        setSteps(Steps.withdraw)
      }}
      body={bodyContent}
    />
  );
}

export default WithdrawBalanceModal;
