import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { FooterInterface } from './index'

const Wrapper = styled.section<FooterInterface>`
    padding-top: ${p=>p.onlyFooter ? '0px !important' : '200px'};
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
    ${p=>p.theme.media.tablet}{
        padding-top: 100px;
        padding-bottom: 40px;
        & > div{
            &:nth-child(1){
                max-width: 1500px;
                margin: auto;
                width: 90%;
                padding: 70px 20px 40px 20px;
                flex-direction: row;
                justify-content: space-between;
                border-bottom: 1px solid rgba(255,255,255,.2);
                & > div{
                    max-width: 150px !important;
                }
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        & > div{
            &:nth-child(1){
                & > div{
                    max-width: 250px !important;
                }
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
    ${p=>p.theme.media.tablet}{
        width: auto;
        max-width: unset;
        border: none;
        flex-direction: row;
        padding: 0px;
        margin: 0px;
        & > a{
            font-size: 1.1rem;
            margin: 0px 15px;
            &:last-child{
                margin-right: 0px;
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        & > a{
            font-size: 1.5rem;
            margin: 0px 25px;
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
    ${p=>p.theme.media.tablet}{
        max-width: 1500px;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        width: 90%;
        margin: auto;
        margin-top: 40px;
        & > section{
            text-align: left;
        }
    }

`



const SecondLevel:React.FC<FooterInterface> = ({onlyFooter}) => {
    return (
        <Wrapper onlyFooter={onlyFooter}>
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
