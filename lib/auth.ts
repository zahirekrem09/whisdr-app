import NextAuth, { AuthOptions, getServerSession } from 'next-auth'
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

        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        const res = await httpClient.post('user/login', {
          username: credentials.email,
          password: credentials.password,
        })

        const token = res.data

        const userRes = await httpClient.get('user/1', {
          headers: {
            Authorization: token,
          },
        })
        const user = userRes.data
        // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user
        // }
        console.log({ token, user })
        //TODO: token decode edilicek veya loginde user datasi da istenewcek
        return token
        // Return null if user data could not be retrieved
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
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = user.role
        token.id = user.id
        token.name = user.name
      }
      if (trigger === 'update' && session?.user?.name) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        token.name = session?.user?.name
      }
      return token
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role
        session.user.id = token.id
        session.user.name = token.name
      }
      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
export const getAuthSession = () => getServerSession(authOptions)
