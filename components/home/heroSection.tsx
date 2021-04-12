import styled from 'styled-components'
import Button from '../../elements/button'
import Image from 'next/image'


const Wrapper = styled.section`
    background: ${p=>p.theme.colors.peach};
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div{
        margin-top: -380px !important;
        width: 500px !important;
        max-width: unset !important;
        transform: translateY(300px);
    }
    & > article{
        margin: 25px 0px;
        max-width: 350px;
        text-align: center;
        padding: 15px;
        & > h1{
            font-weight: 400;
            font-size: 1.9rem;
            line-height: 40px;
        }
        & > p{
            margin: 35px 0px;
            opacity: .8;
        }
    }
    ${p=>p.theme.media.tablet}{
        width: 90%;
        margin: auto;
        margin-top: 40px;
        border-radius: 17px;
        & > div{
            margin-top: -420px !important;
            width: 550px !important;
            transform: translateY(300px);
        }
        & > article{
            max-width: 490px;
            & > h1{
                font-size: 2.7rem;
                line-height: 50px;
            }
            & > p{
                font-size: 1.1rem;
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        max-width: 1500px;
        flex-direction: row;
        justify-content: space-between;
        padding: 50px 0px;
        & > article{
            max-width: 600px;
            padding-left: 70px;
            text-align: left;
        }
    }
`

const heroSection = () => {
    return (
        <Wrapper>
            <article>
                <h1>Award-winning custom designs and digital branding solutions</h1>
                <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <Button content="learn more" />
            </article>
            <Image src='/assets/home/desktop/image-hero-phone.png' width="642" height="913" />
        </Wrapper>
    )
}

export default heroSection
