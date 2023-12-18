"use client"
import React from 'react'
import Header from './components/Header/Header'
import FirstCard from './components/FirstCard/FirstCard'
import GlobalCard from './components/GlobalCard/GlobalCard'
import HowToStart from './components/HowToStart/HowToStart'
import University from './components/University/University'
import Footer from './components/Footer/Footer'
import Faq from './components/FAQ/Faq'
import NavigationCards from './components/NavigationsCards/NavigationCards'


export default function IndexClient({currentUser, blogs}: any) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Header fixed currentUser={currentUser}/>
            <FirstCard/>
            <NavigationCards blogs={blogs}/>
            <GlobalCard />
            <HowToStart />
            <University />
            <Faq />
            <Footer/>
        </div>
      )
}
