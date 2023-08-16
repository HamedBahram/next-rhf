import Rhf from '@/components/rhf'
import RhfWithZod from '@/components/rhf-with-zod'
import SimpleForm from '@/components/simple'
import RhfWithAction from '@/components/with-action'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-16 text-2xl font-medium'>React Hook Forms</h1>
        {/* <SimpleForm /> */}
        {/* <Rhf /> */}
        {/* <RhfWithZod /> */}
        <RhfWithAction />
      </div>
    </section>
  )
}
