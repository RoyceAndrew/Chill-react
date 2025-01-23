import { Nav } from "../component/Nav"
import { Hero } from "../component/Hero"
import { Lanjut } from "../component/Lanjut"
import { TopRating } from "../component/TopRating"
import { FilmTrending } from "../component/FilmTrending"
import { Rilis } from "../component/Rilis"
import { Footer } from "../component/Footer"

export const Homepage = () => {
    return <>
    <Nav/> 
    <main>
    <Hero/>
    <Lanjut/>
    <TopRating/>
    <FilmTrending/>
    <Rilis/>
    </main>
     <Footer/>
    </>
}