import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Card className='w-1/3 m-4'>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Email" className='p-2 border-gray-100 border-2'/>
              </div>
              <div className='flex flex-col gap-1'>
              <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" className='p-2 border-gray-100 border-2' />
              </div>
            <Button>
              Login
            </Button>
            <Button variant={'outline'}>
              Login with Google
            </Button>
            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login;