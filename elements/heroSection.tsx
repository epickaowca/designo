import styled from 'styled-components'
import Button from './button'
import Image from 'next/image'


type WrapperType = {designCase: boolean, aboutCase: boolean}

const Wrapper = styled.section<WrapperType>`
    background: ${p=>p.theme.colors.peach};
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${p=>p.aboutCase && `
        flex-direction: column-reverse; 
    `}
    & > div{
        margin-top: -380px !important;
        width: 500px !important;
        max-width: unset !important;
        transform: translateY(300px);
        ${p=>p.aboutCase && `
            width: 100% !important;
            max-height: 450px !important;
            margin-top: -500px !important;
            min-width: 320px !important;
        `}
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
            width: ${p=>p.aboutCase ? '100%' : '550px'} !important;
            transform: translateY(300px);
        }
    }
    ${p=>p.theme.media.desktop}{
        max-width: 1500px;
        flex-direction: row;
        justify-content: ${p=>p.designCase ? 'center' : 'space-between'};
        padding: ${p=>p.aboutCase ? '0px' : '50px 0px'};
        ${p=>p.aboutCase && `
      
        & > div{
            max-height: 500px !important;
            height: 100% !important;
            margin-top: 0px !important;
            transform: unset;
            max-width: 500px !important
        }
        `}
    }
`

const StyledArticle = styled.article<WrapperType>`
    margin: 25px 0px;
    max-width: 350px;
    text-align: center;
    padding: 15px;
    ${p=>p.aboutCase && `
        max-width: 450px;
        margin-top: 340px;
    `}
    & > h1{
        font-weight: 400;
        font-size: 1.9rem;
        line-height: 40px;
    }
    & > p{
        margin: 35px 0px;
        opacity: .8;
    }
    ${p=>p.theme.media.tablet}{
        max-width: ${p=>p.aboutCase ? '650px' : '490px'};
        & > h1{
            font-size: 2.7rem;
            line-height: 50px;
        }
        & > p{
            font-size: 1.1rem;
        }
    }
    ${p=>p.theme.media.desktop}{
        max-width: ${p=>p.aboutCase ? '750px' : '600px'};
        padding-left: 70px;
        text-align: ${p=>p.designCase ? 'center' : 'left'};
        ${p=>p.aboutCase && 'margin-top: 0px'};
    }
`

interface HeroSectionInterface {
    designCase?: boolean
    header: string
    paragraf: string
    aboutCase?: boolean
}

const heroSection:React.FC<HeroSectionInterface> = ({designCase, header, paragraf, aboutCase}) => {
    return (
        <Wrapper aboutCase={aboutCase} designCase={designCase}>
            <StyledArticle aboutCase={aboutCase} designCase={designCase}>
                <h1>{header}</h1>
                <p>{paragraf}</p>
                {designCase ? '' : aboutCase ? '' : <Button content="learn more" />}
            </StyledArticle>
                {!designCase && <Image objectFit='cover' src={aboutCase ? '/assets/about/desktop/image-about-hero.jpg' : '/assets/home/desktop/image-hero-phone.png'} width="642" height="913" />}
        </Wrapper>
    )
}

export default heroSection
