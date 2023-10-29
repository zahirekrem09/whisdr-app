import NextAuth, { AuthOptions, User, getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import httpClient from './httpClient'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials')
        }

        try {
          const res = await httpClient.post('user/login', {
            username: credentials.email,
            password: credentials.password,
          })

          const jwt = res.data
          // return user credentials together with jwt
          if (jwt)
            return {
              email: credentials.email,
              role: 'ADMIN',
              jwt,
            } as User
        } catch (error) {
          throw new Error('Invalid credentials')
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  debug: process.env.NODE_ENV !== 'production',
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, trigger, session, account }) {
      if (user && account) {
        token['user'] = user
        token['jwt'] = user.jwt
        token['role'] = user?.role as string
        return token
      }

      return token
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (token) {
        session.jwt = token.jwt as string
        session.user.role = token.role
      }

      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
export const getAuthSession = () => getServerSession(authOptions)
