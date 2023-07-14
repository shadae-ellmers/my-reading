import prisma from '../../prisma/client'

type UserData = {
  id: number
  name: string
}

export async function GET(request: Request) {
  return new Response(`hello world ${prisma.user.findMany()}`)
}
