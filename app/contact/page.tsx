import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-10 text-center font-serif text-3xl font-medium'>
          Contact us
        </h1>
        <ContactForm />
      </div>
    </section>
  )
}
