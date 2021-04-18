import TitleTag from '../elements/titleTag'
import Header from '../elements/header'
import Footer from '../elements/footer'
import ContactForm from '../components/contact/contactForm'
import AdvantagesSection from '../elements/advantagesSection'

export default function Contact() {
  return (
    <>
      <TitleTag title='contact' />
      <Header />
      <ContactForm />
      <AdvantagesSection case2 propsName={['canada', 'australia', 'united kingdom']} />
      <Footer onlyFooter />
    </>
  )
}
