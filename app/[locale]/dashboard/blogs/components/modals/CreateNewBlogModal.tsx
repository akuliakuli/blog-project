'use client';

import { useState } from "react";

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import Modal from "@/app/[locale]/components/modals/Modal";
import useCreateNewBlogModal from "@/app/[locale]/hooks/useCreateNewBlogModal";

const CreateNewBlogModal = () => {
  const createNewBlog = useCreateNewBlogModal();
  const [isLoading, setLoading] = useState(false);
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
          title: '',
          image: '',
          content: '',
          cryptoecosystem: false,
          investment: false,
          bitcoin: false
        },
  });

  const imageWatch = watch('image')

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setLoading(true)
    axios.post('/api/blogs/newblog', {
        image: data.image,
        title: data.title,
        content: data.content,
        theme: {
            cryptoecosystem: data.cryptoecosystem && data.cryptoecosystem,
            investment: data.investment && data.investment,
            bitcoin: data.bitcoin && data.bitcoin
        }
    }).then(() => {
        setLoading(false)
        router.refresh()
        createNewBlog.onClose()
    }).catch((error) => {
        setLoading(false)
        toast.error('Something Went Wrong')
    })
  }

  let bodyContent = (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="flex justify-center items-center w-full">
        <img src={imageWatch ? imageWatch : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'} className='w-full bg-cover h-[250px] object-cover rounded-xl' alt=''/>
      </div>
      <label>Image</label>
      <input type="url" placeholder="Image URL" {...register("image", {required: true})} />
      <label>Title</label>
      <input type="text" placeholder="Title" {...register("title", {required: true})} />
      <label>Content</label>
      <textarea placeholder="Content" {...register("content", {required: true})} />

      <div className="flex justify-between">
        <div className="flex w-[33%] flex-col justify-center items-center">
          <label>Crypto Ecosystem</label>
          <input type="checkbox" placeholder="checkbox" {...register("cryptoecosystem", {required: false})} />
        </div>
        <div className="flex w-[33%] flex-col justify-center items-center">
          <label>Investment</label>
          <input type="checkbox" placeholder="checkbox" {...register("investment", {required: false})} />
        </div>
        <div className="flex w-[33%] flex-col justify-center items-center">
          <label>Bitcoin</label>
          <input type="checkbox" placeholder="checkbox" {...register("bitcoin", {required: false})} />
        </div>
      </div>

        <input type="submit" placeholder="Submit" disabled={isLoading}/>
      </form>
  )



  return (
    <Modal
      isOpen={createNewBlog.isOpen}
      title={'Add new Blog'}
      onClose={createNewBlog.onClose}
      body={bodyContent}
    />
  );
}

export default CreateNewBlogModal;
