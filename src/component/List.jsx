
import "slick-carousel/slick/slick.css";

import { ImgDetail } from "./ImgDetail";

export const List = ({movies, api, loading, title}) => {
  

  return (
    <section
      className="p-[20px] mt-[-20px] flex items-start sm:items-center justify-center bg-home-color flex-col w-full"
      id="series"
    >
      <div>
        <h2 className="lg:text-[30px] text-[20px]">
          {title}
        </h2>
        <ImgDetail
        api={api}
        movies={movies}
        loading={loading}
        />
         
      </div>
    </section>
  );
};