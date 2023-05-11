import React from 'react'
import { 
    ContactImage, 
    ContactInfo, 
    ContactWrapper, 
    ContactsSection
} from '../styles/section/contactSection.styles'
import { SectionHeading } from '../styles/commen/SectionHeading.styles'
import { FaEnvelope, FaTelegram } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <>
      <ContactsSection id='contact'>
        <SectionHeading>
            <h1>Contacts</h1>
            <p>Get in touch</p>
        </SectionHeading>
        <ContactWrapper>
            <ContactInfo>
                <p>
                    I'd Love if you reached out to me.
                    Even if it's just to say "Hay!". Don't hesitate! 
                    Drop me a line and I'll get back to you ASAP!
                </p>
                 
                <div>
                    <a href="mailto:abebetizazu157@gmail.com">
                        <FaEnvelope /> <span>My Email</span>
                    </a>
                    <a href="https://t.me/abiye1921">
                        <FaTelegram /><span>Telegram</span>
                    </a>
                </div>
            </ContactInfo>
            <ContactImage>
                <img src='/images/chat.svg'  alt='contact-prof' />
            </ContactImage>
        </ContactWrapper>

      </ContactsSection>
      <hr/>
    </>
  )
}

export default ContactSection
