import styled from 'styled-components'
import Image from 'next/image'
import Button from '../button'

interface StyledItemInterface {
    case2?:boolean
}

const StyledItem = styled.div<StyledItemInterface>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 15px;
    text-align: center;
    color: ${p=>p.theme.colors.black};
    & > div{
        background-image:url('/assets/shared/desktop/bg-pattern-small-circle.svg');
        background-repeat: no-repeat;
    }
    & > article{
        max-width: 350px;
        & > h1{
            letter-spacing: 5px;
            margin: 25px 0px;
            text-transform: uppercase;
            font-weight: 500;
            font-size: 1.5rem;
        }
    }
    ${p=>p.theme.media.tablet}{
        width: 90%;
        ${p=>!p.case2 && `
            flex-direction: row;
            text-align: left;
            max-width: 900px;
            & > div{
                flex-shrink: 0;
            }
            & > article{
                margin-left: 60px;
                max-width: unset;
                & > h1{
                    margin-top: 0px;
                }
            }
        `}
    }
    ${p=>p.theme.media.desktop}{
        flex-direction: column;
        text-align: center;
        & > article{
            margin-left: 0px;
            max-width: 400px;
            & > h1{
                letter-spacing: 7px;
                margin: 35px 0px;
            }
        }
    }
`

interface AdvantageItemInterface {
    propsName: string
    paragraf?: string
    case2?:boolean
}

const AdvantageItem:React.FC<AdvantageItemInterface> = ({ propsName, paragraf, case2 }) => {
    return (
        <StyledItem case2={case2}>
            <div>
                <Image src={ `/assets/${case2 ? 'shared' : 'home'}/desktop/illustration-${propsName.split(" ").join("-")}.svg`} width={202} height={202} alt={`ilustration ${propsName}`} />
            </div>
            <article>
                <h1>{propsName}</h1>
                {case2 ? <Button content="see location" case2 /> : <p>{paragraf}</p>}
            </article>
        </StyledItem>
    )
}

export default AdvantageItem
