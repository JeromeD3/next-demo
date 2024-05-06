import { UserAuthForm } from '@/components/UserAuthForm'
import { getCurrentUser } from '@/lib/session'

export default async function Home() {
  const user = await getCurrentUser()
  console.log(user)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>Current User:{user}</>
      <UserAuthForm />
    </main>
  )
}
