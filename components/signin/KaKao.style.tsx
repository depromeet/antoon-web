import styled from '@emotion/styled'

import Image from 'next/image'

const KakaoWrap = styled.div`
    text-align: center;
    margin-top: 50px;
`

const SignInBtn = styled.button`
    width: 100px;
    height: 30px;
    border: 1px solid ${(props) => props.theme.colors.black};
    background-color: #fae100;
`

const SignOutBtn = styled.button`
    width: 100px;
    height: 30px;
    border: 1px solid ${(props) => props.theme.colors.black};
    background-color: #eeeeee;
`

const User = styled.div``

const Name = styled.p`
    margin: 30px;
`

const Email = styled.p`
    margin: 30px;
`

const Img = styled(Image)``

export { KakaoWrap, SignInBtn, SignOutBtn, User, Name, Email, Img }
