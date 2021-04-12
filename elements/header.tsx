import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

interface TitleProps {
    readonly navVisible: boolean;
};

const StyledHeader = styled.header<TitleProps>`
    max-width: 1500px;
    position: relative;
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
    ${p=>p.theme.media.tablet}{
        margin: auto;
        width: 90%;
        min-width: 768px;
        & > section{
            display: none !important;
        }
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 5px 15px;
    }
    ${p=>p.theme.media.desktop}{
        padding: 15px 0px;
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
    ${p=>p.theme.media.tablet}{
        & > div{
            &:nth-child(2){
                display: none !important;
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        & > div{
            &:nth-child(1){
                max-width: 300px !important;
            }
        }
    }
`
    
const StyledNav = styled.nav<TitleProps>`
    display: ${p=>p.navVisible ? 'flex' : 'none'};    
    position: absolute;
    width: 100%;
    bottom: 0;
    transform: translateY(100%);
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
    ${p=>p.theme.media.tablet}{
        position: unset;
        width: unset;
        bottom: unset;
        transform: unset;
        display: flex !important;
        flex-direction: row;
        background: white;
        & > a{
            color: ${p=>p.theme.colors.black};
            margin: 0px 15px;
            font-size: 1rem;
        }
    }
    ${p=>p.theme.media.desktop}{
        & > a{
            font-size: 1.2rem;
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
