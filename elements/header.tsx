import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const StyledHeader = styled.header`
    display: flex;
    justify-items: space-between;
    & > div{
        & > img{
            object-fit: contain;
        }
    }
    & > nav{
        & > a{
            font-size: 15px;
            text-transform: uppercase;
        }
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <Image src='/assets/shared/desktop/logo-dark.png' width={404} height={54} alt="designo logo"/>
            <Image src='/assets/shared/mobile/icon-hamburger.svg' width={24} height={20} alt="open nav"/>
            <nav>
                <Link href='/about'>our company</Link>
                <Link href='/about'>locations</Link>
                <Link href='/about'>contact</Link>
            </nav>
        </StyledHeader>
    )
}

export default Header
