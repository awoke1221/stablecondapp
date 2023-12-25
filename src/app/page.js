import Image from 'next/image'
import Hero from '@components/Hero'
import homeimage from '../../public/home.jpg'


export default function Home() {
  return (
    <Hero imgData={homeimage} imgAlt='Car factory'  title='Profesional Cloud Hosting' />
    
  )
}
