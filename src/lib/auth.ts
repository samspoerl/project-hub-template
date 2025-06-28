// This module defines the auth handlers but doesn't protect endpoints
// To protect endpoints go to middleware.ts

import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
    async signIn({ user }) {
      if (!user.email) {
        console.error(
          "OAuth provider didn't return an email and thus the user couldn't be signed in."
        )
        return false
      }

      return isAuthorizedUser(user.email)
    },
  },
})

function isAuthorizedUser(email: string): boolean {
  const authorizedUsersStr = process.env.AUTHORIZED_USERS ?? ''
  const authorizedUsers: string[] = authorizedUsersStr.split(',')

  return authorizedUsers.includes(email)
}
