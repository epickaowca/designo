import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

interface TitleProps {
    readonly navVisible: boolean;
};

const StyledHeader = styled.header<TitleProps>`
    display: flex;
    flex-direction: column;
    & > section{
        display: ${p=>p.navVisible ? 'block' : 'none'};
        bottom: 0px;
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index: 30;
        right: 0px;
        left: 0px;
        top: 0px;
        background: rgba(0,0,0,.4);
    }
`
    
const LogoDiv = styled.div`
    background: white;
    position: relative;
    z-index: 31;
    justify-content: space-between;
    padding: 30px 15px;
    display: flex;
    & > div{
        &:nth-child(1){
            max-width: 200px !important;
            margin-right: 25px !important;
        }
        &:nth-child(2){
            cursor: pointer;
            flex-shrink: 0;
        }
        & > img{
            object-fit: contain;
        }
    }
`
    
const StyledNav = styled.nav<TitleProps>`
    display: ${p=>p.navVisible ? 'flex' : 'none'};    
    position: relative;
    z-index: 31;
    background: ${p=>p.theme.colors.black};
    flex-direction: column;
    padding: 15px;
    & > a{
        font-size: 1.2rem;
        margin: 7px 0px;
        color: rgba(255,255,255,.89);
        text-transform: uppercase;
        &:hover{
            opacity: .7;
        }
    }
`


const Header:React.FC = () => {
    const [navVisible, setNavVisible] = useState(false)

    return (
        <StyledHeader navVisible={navVisible}>
            <LogoDiv>
                <Image src='/assets/shared/desktop/logo-dark.png' width={404} height={54} alt="designo logo"/>
                <Image onClick={()=>setNavVisible(prev=>!prev)} src={navVisible ? '/assets/shared/mobile/icon-close.svg' : '/assets/shared/mobile/icon-hamburger.svg'} width={navVisible ? 20 : 24} height={20} alt={navVisible ? "close navigation" : "open navigation"}/>
            </LogoDiv>
            <StyledNav navVisible={navVisible}>
                <Link href='/about'>our company</Link>
                <Link href='/about'>locations</Link>
                <Link href='/about'>contact</Link>
            </StyledNav>
            <section></section>
        </StyledHeader>
    )
}

export default Header
