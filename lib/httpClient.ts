import axios, { AxiosInstance } from 'axios'
import { getAuthSession } from './auth'
import { getSession, signOut } from 'next-auth/react'

const httpClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

httpClient.interceptors.request.use(
  async request => {
    // Get the session
    const isServer = typeof window === 'undefined'
    const session = isServer ? await getAuthSession() : await getSession()

    // Add your desired session value to the request headers
    if (session) {
      request.headers.Authorization = `Bearer ${session.jwt}`
    }

    return request
  },
  err => {
    if (err.response) {
      if (err.response.status === 401 || err.response.status === 403) {
        // signOut()
      }
    } else if (err.request) {
      // client never received a response, or request never left
    } else {
      // anything else
    }
    return Promise.reject(err)
  },
)

export default httpClient
