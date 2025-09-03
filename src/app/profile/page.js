import { auth } from "@clerk/nextjs/server"


export default async function ProfilePage() {
    const {userId} = await auth()
    
  return (
    <div>Welcome to your profile, {userId}</div>
  )
}

