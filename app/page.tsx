import { UserAuthForm } from '@/components/UserAuthForm'
import Image from 'next/image'
import { getCurrentUser } from '@/lib/session'

export default async function Home() {
  const user = await getCurrentUser()
  console.log(user)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        Current User:
        {user?.name}
        <Image src={user?.image!} alt={user?.name!} width={100} height={100} className="rounded-full" />
      </>
      <UserAuthForm />
    </main>
  )
}
