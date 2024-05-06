import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
export async function getCurrentUser() {
  return (await getServerSession(authOptions)) as any
}
