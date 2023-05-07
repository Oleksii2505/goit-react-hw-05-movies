import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/api';
import {
  CastItem,
  ProfileImgThumb,
  ArtistGallery,
  ArtistNameThumb,
  ArtistPhoto,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const normalizedCast = arr => {
    return arr.map(({ id, character, name, profile_path }) => ({
      id,
      character,
      name,
      profile_path,
    }));
  };

  useEffect(() => {
    const getCast = async () => {
      try {
        const {
          data: { cast },
        } = await fetchMovieCast(movieId);

        setCast(normalizedCast(cast));
        return cast;
      } catch (err) {
        console.log(err.message);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <ArtistGallery>
      {!cast.length ? (
        <p>Possibly, there is no information about cast</p>
      ) : (
        cast.map(({ id, character, name, profile_path }) => {
          return (
            <CastItem key={id}>
              <ProfileImgThumb>
                <ArtistPhoto
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : `https://as1.ftcdn.net/v2/jpg/05/64/45/52/1000_F_564455291_RRMiR6jlecxRBpSdtOT1KAX8a8FRhinM.jpg`
                  }
                  alt={name}
                  width="280"
                  height="420"
                />
              </ProfileImgThumb>
              <ArtistNameThumb>
                <h3>{name}</h3>
                <p>{character}</p>
              </ArtistNameThumb>
            </CastItem>
          );
        })
      )}
    </ArtistGallery>
  );
};

export default Cast;