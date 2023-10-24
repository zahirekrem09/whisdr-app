import Link from 'next/link'
import UserSignForm from './UserSignForm'

const Login = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <UserSignForm />
      <p className="text-muted-foreground px-8 text-center text-sm">
        Create a account{' '}
        <Link href="/register" className="hover:text-brand text-sm underline underline-offset-4">
          Sign up
        </Link>
      </p>
      <p className="text-muted-foreground px-8 text-center text-sm">
        Forgot your password{' '}
        <Link
          href="/forgot-password"
          className="text-sm underline underline-offset-4 hover:text-indigo-600"
        >
          Forgot Password
        </Link>
      </p>
    </div>
  )
}

export default Login
