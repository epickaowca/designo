import styled from 'styled-components'
import Button from '../../elements/button'

const Wrapper = styled.section`
    background-color: ${p=>p.theme.colors.peach};
    background-image: url('/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg');
    background-repeat: no-repeat;
    background-size: 1200px;
    ${p=>p.theme.media.tablet}{
        background-size: unset;
        background-image: url('/assets/contact/desktop/bg-pattern-hero-desktop.svg');
        background-position: -80px -80px;
        width: 90%;
        margin: 40px auto;
        border-radius: 15px;
        padding: 0px 45px;
        max-width: 900px;
    }
    ${p=>p.theme.media.desktop}{
        max-width: 1500px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-size: 900px;
        background-position: -100px -300px;
    }
`
    
const StyledArticle = styled.article`
    color: white;
    padding: 45px 27px;
    text-align: center;
    max-width: 400px;
    margin: auto;
    & > h1{
        margin: 25px;
        font-size: 1.7rem;
        font-weight: 500;
    }
    ${p=>p.theme.media.tablet}{
        margin: unset;
        padding: 40px;
        max-width: 600px;
        text-align: left;
        & > h1{
            font-size: 2.5rem;
            margin: 25px 0px;
        }
    }
    ${p=>p.theme.media.desktop}{
        padding-bottom: 125px;
        & > h1{
            font-size: 4.5rem;
        }
        & > p{
            font-size: 1.3rem;
            line-height: 35px;
        }
    }
`
    
const StyledForm = styled.form`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    padding: 25px;
    margin: auto;
    & > input, & > textarea{
        background: transparent;
        outline: none;
        border: none;
        color: white;
        border-bottom: 1px solid white;
        margin: 25px 0px;
        padding: 15px;
        &::placeholder{
            color: rgba(255,255,255,.7);
        }
    }
    & > textarea{
        height: 100px;
        min-height: 70px;
        max-height: 150px;
        resize: vertical;
    }
    & > button{
        margin: 25px auto;
        padding: 20px 50px;
    }
    ${p=>p.theme.media.tablet}{
        padding: 40px;
        padding-top: 0px;
        max-width: unset;
    }
    ${p=>p.theme.media.desktop}{
        width: 50%;
        padding: 40px 0px;
        max-width: 600px;
        margin: 0px;
        & > input, & > textarea{
            font-size: 1rem;
        }
        & > button{
            margin: 15px 0px;
            align-self: flex-end;
        }
    }
`

const ContactForm = () => {
    return (
        <Wrapper>
            <StyledArticle>
                <h1>Contact Us</h1>
                <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </StyledArticle>
            <StyledForm>
                <input placeholder='Name' type='text' required/>
                <input placeholder='Email Address' type='email' required/>
                <input placeholder='Phone' type='text' required/>
                <textarea placeholder='Your Message' required />
                <Button content='submit' />   
            </StyledForm>
        </Wrapper>
    )
}

export default ContactForm
