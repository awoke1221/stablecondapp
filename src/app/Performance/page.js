
import Hero from "@components/Hero"
import perfImage from '../../../public/performance.jpg'

export default function performancePage(){
    return(
    <Hero imgData={perfImage} imgAlt='building' title='We Serve high performing app' />
    )
}