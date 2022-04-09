import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)

const options = {
    providers: [
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID as string,
            clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.KAKAO_CLIENT_SECRET,
}

export default authHandler
