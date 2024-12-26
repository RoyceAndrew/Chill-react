import { FooterBantuan } from "./FooterBantuan"
import { FooterGenre } from "./FooterGenre"

export const Footer = () => {
    return <footer className="flex items-start flex-col p-[20px] lg:flex-row">
    <div id="copyright" className="mb-[30px]" >
     <img src="./public/picture/Logo.png" alt="chill-logo"/>
     <p>©2024 Chill All Rights Reserved.</p>
    </div>
    
    <div className="symbol flex justify-between w-full lg:w-auto lg:grid">
    <p className="subtitle">Genre</p><p className="font-bold"><i class="bi lg:hidden visible bi-chevron-right"></i></p>
  <FooterGenre/>
  </div>
  <div className="symbol flex justify-between w-full lg:w-auto lg:grid">
    <p className="subtitle mt-[10px]" >Bantuan</p><p className="font-bold mt-[10px]"><i class="bi lg:hidden block bi-chevron-right"></i></p>
  <FooterBantuan/>  
</div>
</footer>
}