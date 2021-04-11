import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Wrapper = styled.section`
    padding-top: 200px;
    background: ${p=>p.theme.colors.black};
    & > div{
        &:nth-child(1){
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 25px 0px;
            & > div{
                max-width: 250px !important;
            }
        }
    }
`

const Nav = styled.nav`
    padding-top: 15px;
    margin-top: 25px;
    max-width: 400px;
    color: rgba(255,255,255,.95);
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(255,255,255,.2);
    width: 90%;
    & > a{
        margin: 10px 0px;
        font-size: 1.3rem;
        cursor: pointer;
        &:hover{
            opacity: .7;
        }
    }
`

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > section{
        text-align: center;
        margin: 20px 0px;
        color: white;
        &:nth-child(1),&:nth-child(2){
            opacity: .7;
            & > p{
                margin: 5px 0px;
            }
        }
        & > div{
            margin: 0px 7px !important;
            &:hover{
                opacity: .7;
            }
        }
    }

`

const SecondLevel = () => {
    return (
        <Wrapper>
            <div>
                <Image src="/assets/shared/desktop/logo-light.png" width={404} height={54} alt="designo logo" />
                <Nav>
                    <Link href='/about'>our company</Link>
                    <Link href='/about'>locations</Link>
                    <Link href='/about'>contact</Link>
                </Nav>
            </div>
            <ContactSection>
                <section>
                    <strong>Designo Central Office</strong>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </section>
                <section>
                    <p>Contact Us (Central Office)</p>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </section>
                <section>
                    <Image src="/assets/shared/desktop/icon-facebook.svg" width={24} height={24} alt="facebook icon" />
                    <Image src="/assets/shared/desktop/icon-youtube.svg" width={24} height={24} alt="youtube icon" />
                    <Image src="/assets/shared/desktop/icon-twitter.svg" width={24} height={20} alt="twitter icon" />
                    <Image src="/assets/shared/desktop/icon-pinterest.svg" width={24} height={24} alt="pinterest icon" />
                    <Image src="/assets/shared/desktop/icon-instagram.svg" width={24} height={24} alt="instagram icon" />
                </section>
            </ContactSection>
        </Wrapper>
    )
}

export default SecondLevel
