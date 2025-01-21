import { Nav } from "../component/Nav"
import { Hero } from "../component/Hero"
import { Lanjut } from "../component/Lanjut"
import { Footer } from "../component/Footer"
import { AllList } from "../component/AllList"
export const Homepage = () => {
    
    return <>
    <Nav/>
    <main>
    <Hero/>
    <Lanjut/>
    <AllList/>
    </main>
    <Footer/>
    </>
}