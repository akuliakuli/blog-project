import React from 'react'
import Header from '../components/Header/Header'
import NewsClient from './NewsClient'
import getCurrentUser from '../actions/getCurrentUser'
import getAllBlog from '../actions/getAllBlog';

async function Index() {
  const currentUser = await getCurrentUser();
  const blogs = await getAllBlog({});
  return (
    <div className="flex min-h-screen flex-col bg-[#FBFFFE]">
      <Header currentUser={currentUser}/>
      <NewsClient blogs={blogs}/>
    </div>
  )
}

export default Index