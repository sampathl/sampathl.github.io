import { Helmet } from 'react-helmet-async'
import ContactSection from './components/ContactSection'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Sampath Portfolio</title>
        <meta name="description" content="Get in touch with Sampath Lakkaraju - Available for new opportunities and collaborations" />
      </Helmet>
      <ContactSection />
    </>
  )
}
