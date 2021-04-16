import styled from 'styled-components'

type WrapperType = {img_name: string, reverseCase: boolean}

const Wrapper = styled.section<WrapperType>`
    & > div{
        background: white;
        background-image: url('/assets/about/mobile/image-${p=>p.img_name}.jpg');
        width: 100%;
        height: 300px;
        background-size: cover;
        background-position: center;
    }
    ${p=>p.theme.media.tablet}{
        max-width: 900px;
        width: 90%;
        margin: auto;
        overflow: hidden;
        border-radius: 20px;
        margin-top: 100px;
        & > div{
            height: 350px;
            background-image: url('/assets/about/tablet/image-${p=>p.img_name}.jpg');
        }
    }
    ${p=>p.theme.media.desktop}{
        display: flex;
        flex-direction: ${p=>p.reverseCase ? 'row-reverse' : 'row'};
        max-width: 1500px;
        width: 90%;
        margin-top: 100px;
        margin: 200px auto;
        ${p=>p.reverseCase && 'margin-bottom: 70px'};
        & > div{
            width: 40%;
            height: 480px;
            background-image: url('/assets/about/desktop/image-${p=>p.img_name}.jpg');
        }
    }
`

const StyledArticle = styled.article`
    background: #FDF3F0;
    text-align: center;
    padding: 40px 20px;
    & > div{
        margin: auto;
        max-width: 400px;
        & > h1{
            margin-top: 10px;
            font-size: 2rem;
            font-weight: 500;
            color: ${p=>p.theme.colors.peach};
        }
        & > p{
            margin: 25px 0px;
        }
    }
    ${p=>p.theme.media.tablet}{
            & > div{
                max-width: 550px;
            }
    }
    ${p=>p.theme.media.desktop}{
        width: 60%;
        display: flex;
        padding-left: 100px;
        align-items: center;
        & > div{
            max-width: 650px;
            margin: 0px;
            text-align: left
        }
    }
`


interface AboutArticleInterface {
    h1: string
    p1: string
    p2: string
    img_name: string
    reverseCase?: boolean
}

const AboutArticle:React.FC<AboutArticleInterface> = ({h1, p1, p2, img_name, reverseCase}) => {
    return (
        <Wrapper reverseCase={reverseCase} img_name={img_name}>
            <div></div>
            <StyledArticle>
                <div>
                    <h1>{h1}</h1>
                    <p>{p1}</p>
                    <p>{p2}</p>
                </div>
            </StyledArticle>
        </Wrapper>
    )
}

export default AboutArticle
