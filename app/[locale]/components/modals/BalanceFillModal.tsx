'use client';

import { useState } from "react";

import Modal from "./Modal";
import useBalanceFillModal from '../../hooks/useBalanceFillModal';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

const BalanceFillModal = ({currentUser}: any) => {
  const balanceFillModal = useBalanceFillModal();
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const { 
    register, 
    handleSubmit,
    control,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
        defaultValues: {
          amount: 0,
        },
  });
  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setLoading(true)
    axios.post('/api/balance/fillrequest', {
        amount: data.amount
    }).then(() => {
        setLoading(false)
        router.refresh()
        balanceFillModal.onClose()
    }).catch((error) => {
        setLoading(false)
        toast.error('Something Went Wrong')
    })
  }

  let bodyContent = (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="bg-gray-300 w-[140px] flex justify-center items-center">
          <input type="number" className="border-0 bg-gray-300 p-2 outline outline-transparent focus:outline-transparent" min={5} max={500} placeholder="Amount" {...register("amount", {required: true})} />
          <label className="w-1/12">$</label>
        </div>

        <input type="submit" placeholder="Submit" disabled={isLoading}/>
      </form>
  )



  return (
    <Modal
      isOpen={balanceFillModal.isOpen}
      title={'Fill Balance'}
      onClose={balanceFillModal.onClose}
      body={bodyContent}
    />
  );
}

export default BalanceFillModal;
