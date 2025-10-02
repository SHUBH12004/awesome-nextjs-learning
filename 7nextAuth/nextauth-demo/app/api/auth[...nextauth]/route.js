import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

//handler is a function that is called when the user is authenticated.
const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
   GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
   })
  ]
})

//when get call is made, handler is called.
//when post call is made, handler is called.
export { handler as GET, handler as POST }