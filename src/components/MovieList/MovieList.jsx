import { Link , useLocation } from "react-router-dom";
import { TrendingGallery, 
    TrendingItem, 
    ImgBox,
    TitleMovieBox, PosterImg } from "./MovieList.styled";

export const MovieList = ({movies}) => {
   
    const location = useLocation();
    return (
        <TrendingGallery>
          {movies.map(({ id, poster_path, title }) => {
            return (
            <TrendingItem> 
              <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
                
                  <ImgBox>
                    <PosterImg
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : `https://as1.ftcdn.net/v2/jpg/01/41/48/32/1000_F_141483247_cvrudefB00p8qNxoapWW54jjm3LzXFgz.jpg`
                      }
                      alt={title}
                      width="352"
                      height="400"
                    />
                  </ImgBox>
                  <TitleMovieBox>
                    <h2>{title}</h2>
                  </TitleMovieBox>
              </Link>
            </TrendingItem>
              
            );
          })}
        </TrendingGallery>
    )

}