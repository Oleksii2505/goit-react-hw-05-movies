import { Link , useLocation } from "react-router-dom";
import { TrendingGallery, 
    TrendingItem, 
    ImgBox,
    TitleMovieBox, PosterImg } from "./MovieList.styled";

export const MovieList = ({movies, altText, imageHeight}) => {
   
    const location = useLocation();
    return (
      <TrendingGallery>
      {movies.map(({ id, poster_path, title, original_title }) => {
        const alt = altText || title;
        const height = imageHeight || "528";
        const imgUrl = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : "https://as1.ftcdn.net/v2/jpg/01/41/48/32/1000_F_141483247_cvrudefB00p8qNxoapWW54jjm3LzXFgz.jpg";
        
        return (
          <TrendingItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <ImgBox>
                <PosterImg src={imgUrl} alt={alt} width="352" height={height} />
              </ImgBox>
              <TitleMovieBox>
                <h2>{original_title ? original_title : title}</h2>
              </TitleMovieBox>
            </Link>
          </TrendingItem>
        );
      })}
    </TrendingGallery>
    )
}