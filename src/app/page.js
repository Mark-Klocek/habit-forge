import { Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'






export default function Home() {
  return (
    <>
      <div className="nes-container is-centered m-10 max-w-md bg-gray-400 opacity-75">
        <h1>Habit Forge</h1>
        <p>It is said that building a new habit can take as little as 30 days. Will you forge your new habits starting today?</p>
        <SignedOut>
          <div className='m-2'>

            <SignInButton mode='modal'>
              <button type="button" className="nes-btn is-success">Sign in</button>
            </SignInButton>
          </div>
          <div className='m-2'>
            <SignUpButton>
              <button type="button" className="nes-btn is-primary">Sign up</button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <div className='m-2'>
            <Link href='/profile' className='nes-btn is-primary !text-black'>Your Profile</Link>

          </div>
          <div className='m-2'>
            <SignOutButton>
              <button type="button" className="nes-btn is-error !text-black">Sign out</button>
            </SignOutButton>
          </div>

        </SignedIn>
      </div>

    </>
  )
}