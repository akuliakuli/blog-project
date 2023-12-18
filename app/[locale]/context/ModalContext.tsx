import React from 'react'
import BalanceFillModal from '../components/modals/BalanceFillModal'
import WithdrawBalanceModal from '../components/modals/WithdrawBalanceModal'
import { Role } from '@/prisma/generated/client'
import CreateNewBlogModal from '../dashboard/blogs/components/modals/CreateNewBlogModal'
import EditBlogModal from '../dashboard/blogs/components/modals/EditBlogModal'

export default function ModalContext({currentUser}: any) {
  return (
    <div>
      {currentUser && (
        <>
          <BalanceFillModal currentUser={currentUser}/>
          <WithdrawBalanceModal currentUser={currentUser}/>
        </>
      )}
      {currentUser?.role === Role.Admin && (
        <>
          <CreateNewBlogModal/>
          <EditBlogModal/>
        </>
      )}
    </div>
  )
}
