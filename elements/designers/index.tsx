import styled from 'styled-components'
import DesignersItem from './designersItem'

const Wrapper = styled.section<DesignersInterface>`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 70px;
    width: 90%;
    & > div{
        &:nth-child(${p=>p.designCase ? 4 : 1}){
            border-radius: 10px;
            width: 100%;
            height: 200px;
            margin: 10px auto;
            max-width: 350px;
        }
        &:nth-child(${p=>p.designCase ? 1 : 2}){
            & > div{
                border-radius: 10px;
                width: 100%;
                height: 200px;
                margin: 10px auto;
                max-width: 350px;
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        & > div{
            &:nth-child(${p=>p.designCase ? 4 : 1}){
                max-width: 900px;
            }
            &:nth-child(${p=>p.designCase ? 1 : 2}){
                & > div{
                    max-width: 900px;
                }
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        flex-direction: row;
        justify-content: center;
        max-width: 1500px;
        margin: 130px auto;
        & > div{
            &:nth-child(${p=>p.designCase ? 4 : 1}){
                width: 50%;
                margin: 0px;
                height: 625px;
            }
            &:nth-child(${p=>p.designCase ? 1 : 2}){
                & > div{
                    height: 300px;
                }
                ${p=>p.designCase ? `
                display: flex;
                width: 100%;
                & > div{
                    margin: 0px 25px;
                }
                `: `
                width: 50%;
                margin-left: 25px;
                    & > div{
                        margin: 0px;
                        width: 100%;
                        &:nth-child(1){
                            margin-bottom: 25px;
                        }
                    }
                `}
            }
        }
    }
`

interface DesignersInterface {
    designCase?: 'web' | 'app' | 'graphic'
}

const Designers:React.FC<DesignersInterface> = ({designCase}) => {
    return (
        <Wrapper designCase={designCase}>
            {!designCase && <DesignersItem designCase='web' />}
            <div>
                <DesignersItem designCase={designCase==='app' ? 'web' : 'app'} />
                <DesignersItem designCase={designCase==='graphic' ? 'web' : 'graphic'} />
            </div>
        </Wrapper>
    )
}

export default Designers
