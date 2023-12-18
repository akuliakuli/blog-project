'use client';

import { useEffect, useState } from "react";

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import Modal from "@/app/[locale]/components/modals/Modal";
import useEditBlogModal from "@/app/[locale]/hooks/useEditBlogModal";

const EditBlogModal = () => {
  const {
    blog,
    onClose,
    onOpen,
    isOpen
  } = useEditBlogModal();
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const { 
    register, 
    handleSubmit,
    reset,
    watch
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
  

  useEffect(() => {
    reset({
        title: blog.title,
        image: blog.image,
        content: blog.content,
        cryptoecosystem: blog.theme?.includes('Crypto Ecosystem') && true,
        investment: blog.theme?.includes('Investment') && true,
        bitcoin: blog.theme?.includes('Bitcoin') && true
    })
  }, [isOpen])

  const imageWatch = watch('image')

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setLoading(true)
    axios.post('/api/blogs/editblog', {
        blogId: blog.id,
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
        onClose()
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
      isOpen={isOpen}
      title={'Edit Blog'}
      onClose={onClose}
      body={bodyContent}
    />
  );
}

export default EditBlogModal;
