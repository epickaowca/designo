import styled from 'styled-components'
import Button from './button'
import Image from 'next/image'


type WrapperType = {designCase: boolean}

const Wrapper = styled.section<WrapperType>`
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
        padding-top: 25px;
        max-width: 900px;
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
        justify-content: ${p=>p.designCase ? 'center' : 'space-between'};
        padding: 50px 0px;
        & > article{
            max-width: 600px;
            padding-left: 70px;
            text-align: ${p=>p.designCase ? 'center' : 'left'};
        }
    }
`

interface HeroSectionInterface {
    designCase?: boolean
    header: string
    paragraf: string
}

const heroSection:React.FC<HeroSectionInterface> = ({designCase, header, paragraf}) => {
    return (
        <Wrapper designCase={designCase}>
            <article>
                <h1>{header}</h1>
                <p>{paragraf}</p>
                {!designCase && <Button content="learn more" />}
            </article>
                {!designCase && <Image src='/assets/home/desktop/image-hero-phone.png' width="642" height="913" />}
        </Wrapper>
    )
}

export default heroSection
