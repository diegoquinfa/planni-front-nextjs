'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export const ConfirmationDialog = () => {
  const [isLoading, setIsLoading] = useState(false)
  const session = useSession()
  console.log(session)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const res = await

      setIsLoading(false)
  }

  return (
    <Dialog>
      <DialogTrigger className="w-full rounded-lg bg-brand py-2 text-white">
        Pagar
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Seguro desea realizar la compra??</DialogTitle>
          <form onSubmit={handleSubmit}>
            <button disabled={isLoading}>Hacer compra</button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
