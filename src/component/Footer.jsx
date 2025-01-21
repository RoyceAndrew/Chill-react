import { FooterBantuan } from "./FooterBantuan"
import { FooterGenre } from "./FooterGenre"

export const Footer = () => {
    return <footer className="flex items-start bg-home-color flex-col p-[20px] xl:flex-row border-t border-t-white/50">
    <div id="copyright" className="mb-[30px]" >
     <img src="./picture/Logo.png" alt="chill-logo"/>
     <p>©2024 Chill All Rights Reserved.</p>
    </div>
    
    <div className="symbol flex justify-between w-full xl:w-auto xl:grid">
    <p className="subtitle">Genre</p><p className="font-bold"><i class="bi xl:hidden visible bi-chevron-right"></i></p>
  <FooterGenre/>
  </div>
  <div className="symbol flex justify-between w-full xl:w-auto xl:grid">
    <p className="subtitle mt-[10px]" >Bantuan</p><p className="font-bold mt-[10px]"><i class="bi xl:hidden block bi-chevron-right"></i></p>
  <FooterBantuan/>  
</div>
</footer>
}