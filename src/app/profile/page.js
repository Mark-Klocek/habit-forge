import { auth } from "@clerk/nextjs/server"


export default async function ProfilePage() {
    const user = await auth()
    
  return (
    <div>Welcome to your profile</div>
  )
}

