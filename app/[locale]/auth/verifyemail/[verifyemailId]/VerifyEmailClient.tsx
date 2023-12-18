"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorPage from "./components/ErrorPage";
import VerifyedPage from "./components/VerifyedPage";
import SendPage from "./components/SendPage";

enum STEPS {
    sendRequest,
    resendRequest,
}

export default function VerifyEmailClient(email: any) {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [steps, setSteps] = useState(STEPS.sendRequest);

    const verifyEmailRequest = async () => {
      setLoading(true)
      try{
          axios.post(`/api/users/requestemail`, email)
          .then(() => {
            setLoading(false);
            setSteps(STEPS.resendRequest)
          }).catch((error) => {
            setLoading(false);
            setError(true);
          })
      }catch(error: any){
        setError(true);
      }
    }
   
    const verifyUserEmail = async () => {
        try{
            setLoading(true)
            axios.post('/api/users/verifyemail', {token}).then(() => {
              setVerified(true);
              setLoading(false)
            }).catch((error) => {
                setError(true);
                setVerified(false);
                setLoading(false)
            })
            
        }catch(error: any){
            setError(true);
            setLoading(false)
        }
    }
    // sendEmail({email: email, hashedToken: hashedToken});
    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "")
    }, [])

    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }
    }, [token])

    return (
        <div className="flex bg-blue-50 flex-col items-center justify-center min-h-screen py-2">
             <div className="flex items-center justify-center min-h-screen p-5 min-w-screen">
                    <div className="max-w-xl p-8 text-center w-full md:w-[650px] text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
                        {error ? (
                            <ErrorPage/>
                        ): (
                            verified ? (
                                <VerifyedPage/>
                            ) : (
                                <SendPage verifyEmailRequest={verifyEmailRequest} STEPS={STEPS} steps={steps} loading={loading}/>
                            )
                        )}
                </div>
            </div>
        </div>
    )
}