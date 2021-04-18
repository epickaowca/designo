import styled from 'styled-components'

type WrapperType = {reversed: boolean, imgName: string}
const cos = 'xd'

const Wrapper = styled.section<WrapperType>`
margin: 45px 0px;
& > div{
        width: 100%;
        height: 320px;
        background-image: url('/assets/locations/desktop/image-map-${p=>p.imgName}.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    ${p=>p.theme.media.tablet}{
        width: 90%;
        margin: auto;
        margin: 85px auto;
        & > div{
            height: 450px;
            border-radius: 15px;
            margin-bottom: 35px;
            background-image: url('/assets/locations/tablet/image-map-${p=>p.imgName}.png');
        }
    }
    ${p=>p.theme.media.desktop}{
        max-width: 1500px;
        margin-top: 35px;
        display: flex;
        flex-direction: ${p=>p.reversed ? 'row' : 'row-reverse'};
        & > div{
            background-image: url('/assets/locations/desktop/image-map-${p=>p.imgName}.png');
            flex:7;
            height: 0px;
            height: 350px;
            margin: unset;
        }
        & > article{
            justify-content: center;
            padding: 90px 90px;
            margin: unset;
            margin-right: 25px;
            flex: 8;
        }
    }
`
    const StyledArticle = styled.article`
    background: #FDF3F0 url('/assets/shared/desktop/bg-pattern-two-circles.svg');
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    text-align: center;
    & > h1{
        font-size: 2rem;
        color: ${p=>p.theme.colors.peach};
        &:first-letter{
            text-transform: uppercase;
        }
    }
    & > div{
        & > section{
            margin: 25px 0px;
        }
    }
    ${p=>p.theme.media.tablet}{
        border-radius: 15px;
        text-align: left;
        align-items: flex-start;
        padding: 90px;
        & > div{
            display: flex;
            & > section{
                &:nth-child(2){
                    margin-left: 85px;
                }
            }
        }
    }
    
`
    

interface LocationItemInterface {
    propsObject:{
        locationName: string
        officeName: string
        officeStreet1: string
        officeStreet2: string
        phone: string
        email: string
        reversed?: boolean
    }
}

const LocationItem:React.FC<LocationItemInterface> = ({propsObject:{locationName, officeName, officeStreet1, officeStreet2, phone, email, reversed}}) => {
    const imgName = locationName.split(" ").join("-")
    return (
        <Wrapper reversed={reversed} imgName={imgName}>
            <div></div>
            <StyledArticle>
                <h1>{locationName}</h1>
                <div>
                    <section>
                        <strong>{officeName}</strong>
                        <p>{officeStreet1}</p>
                        <p>{officeStreet2}</p>
                    </section>
                    <section>
                        <strong>Contact</strong>
                        <p>P:{phone}</p>
                        <p>M:{email}</p>
                    </section>
                </div>
            </StyledArticle>
        </Wrapper>
    )
}

export default LocationItem
