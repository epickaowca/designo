import styled from 'styled-components'
import Button from '../button'

const Wrapper = styled.section`
    position: relative;
    transform: translateY(200px);
    padding: 15px;
    & > div{
        max-width: 400px;
        background: ${p=>p.theme.colors.peach};
        background-image: url('/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 20px;
        text-align: center;
        margin: 0px 15px;
        border-radius: 15px;
        color: white;
        margin: auto;
        & > article{
            margin-bottom: 30px;
            & > h1{
                line-height: 45px;
                font-size: 2.5rem;
                font-weight: 400;
                margin-top: 0px;
            }
            & > p{
                opacity: .8;
                margin-top: 30px;
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        transform: translateY(100px);
        padding: 0px;
        & > div{
            max-width: 1500px;
            width: 90%;
            & > article{
                max-width: 400px;
                & > h1{
                    line-height: 55px;
                    font-size: 3.1rem;
                }
                & > p{
                    font-size: 1.1rem;
                }
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        & > div{
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            padding: 60px;
            & > article{
                max-width: 500px;
                & > h1{
                    font-size: 2.5rem;
                    line-height: 45px;
                    max-width: 300px;
                }
            }
        }
    }
`

const GetInTouch:React.FC = () => {
    return (
        <Wrapper>
            <div>
                <article>
                    <h1>Let’s talk about your project</h1>
                    <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </article>
                <Button content="Get in touch" />
            </div>
        </Wrapper>
    )
}

export default GetInTouch
