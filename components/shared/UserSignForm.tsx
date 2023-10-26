'use client'

import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import * as React from 'react'
import { FC } from 'react'
import toast from 'react-hot-toast'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { LoginFormValues, loginFormSchema } from '@/lib/schema/login'

interface IUserSignFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserSignForm: FC<IUserSignFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<LoginFormValues> = data => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false,
      // callbackUrl: '/',
    })
      .then(callback => {
        setIsLoading(false)
        if (callback?.error) {
          return toast.error(callback.error)
        }
        if (callback?.ok) {
          toast.success('Logged in')
          router.push('/')
          router.refresh()
        }
      })
      .catch(err => console.error({ err }))
  }

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Card className="w-[400px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Login to your account!</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/* <div className="grid gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" onClick={() => signIn('google')}>
              <Icons.google className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
          </div> */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background text-muted-foreground px-2">Or continue with</span>
            </div>
          </div>
          <Form {...form}>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="shadcn" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="shadcn" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              className="w-full"
              disabled={isLoading}
              size="sm"
            >
              Login
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserSignForm
