import { Nav } from "../component/Nav"
import { Hero } from "../component/Hero"
import { Lanjut } from "../component/Lanjut"
import { Footer } from "../component/Footer"
import { ItemList } from "../component/ItemList"

export const Homepage = () => {
    return <>
    <Nav/> 
    <main>
    <Hero/>
    <Lanjut/>
    <ItemList/>
    </main>
     <Footer/>
    </>
}