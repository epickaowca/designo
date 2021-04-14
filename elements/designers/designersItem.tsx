import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const Wrapper = styled.div<DesignersItemInterface>`
    text-transform: uppercase;
    background-image: url('/assets/home/desktop/image-${p=>p.designCase}-design${p=>p.designCase==="web" ? '-small' : ''}.jpg');
    background-size: cover;
    ${p=>p.theme.media.desktop}{
        ${p=>p.designCase==='web' && !p.onlyTwo && `
        background-image: url('/assets/home/desktop/image-web-design-large.jpg');
        `}
    }
    color: white;
    position: relative;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    &:hover{
        & > div{
            & > div{
                &:nth-child(3){
                    background: rgba(231,129,107,.6);
                }
            }
        }
    }
    & > div{
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        width: 100%;
        height: 100%;
        & > h1{
            z-index: 7;
            font-weight: 500;
            margin-bottom: 10px;
            font-size: 2rem;
        }
        & > div{
            &:nth-child(2){
                z-index: 7;
                display: flex;
                margin: 0px auto;
                align-items: center;
                & > p{
                    margin-right: 15px;
                }
            }
            &:nth-child(3){
                z-index: 5;
                position: absolute;
                background: rgba(0,0,0,.4);
                width: 100%;
                height: 100%;
                top: 0px;
                bottom: 0px;
                left: 0px;
                right: 0px;
            }
        }
    }
`

interface DesignersItemInterface {
    designCase: 'web' | 'app' | 'graphic'
    onlyTwo?: boolean
}

const DesignersItem:React.FC<DesignersItemInterface> = ({designCase, onlyTwo}) => {
    return (
        <Wrapper designCase={designCase} onlyTwo={onlyTwo}>
            <Link href="#">
                <div>
                    <h1>{designCase} design</h1>
                        <div>
                            <p>view projects</p>
                            <Image src='/assets/shared/desktop/icon-right-arrow.svg' width={7} height={10} alt="right arrow" />
                        </div>
                    <div></div>
                </div>
            </Link>
        </Wrapper>
    )
}

export default DesignersItem
