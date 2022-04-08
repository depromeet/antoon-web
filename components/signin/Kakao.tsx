import { signIn, signOut, useSession } from 'next-auth/react'

import {
    KakaoWrap,
    SignInBtn,
    SignOutBtn,
    User,
    Name,
    Email,
    Img,
} from './KaKao.style'

function Kakao() {
    const { data: session, status } = useSession()

    if (status === 'authenticated') {
        return (
            <KakaoWrap>
                <SignOutBtn onClick={() => signOut()}>Logout</SignOutBtn>
                <User>
                    <Name>{session.user.name}</Name>
                    <Email>{session.user.email}</Email>
                    <Img
                        src={session.user.image}
                        width="200px"
                        height="200px"
                    />
                </User>
            </KakaoWrap>
        )
    }

    return (
        <KakaoWrap>
            <SignInBtn
                onClick={() =>
                    signIn('kakao', {
                        callbackUrl: process.env.NEXTAUTH_URL,
                    })
                }
            >
                Login
            </SignInBtn>
        </KakaoWrap>
    )
}

export default Kakao
