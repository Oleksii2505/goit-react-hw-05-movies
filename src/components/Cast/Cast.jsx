import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import {
  CastItem,
  ProfileImgBox,
  ArtistGallery,
  ArtistNameBox,
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
        <p>Probably there is no information about cast</p>
      ) : (
        cast.map(({ id, character, name, profile_path }) => {
          return (
            <CastItem key={id}>
              <ProfileImgBox>
                <ArtistPhoto
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : `https://as2.ftcdn.net/v2/jpg/03/54/78/27/1000_F_354782704_WMBoKbL7pRjWda8YiAy4XfJ5gLAhx2aJ.jpg`
                  }
                  alt={name}
                  width="280"
                  height="400"
                />
              </ProfileImgBox>
              <ArtistNameBox>
                <h3>{name}</h3>
                <p>{character}</p>
              </ArtistNameBox>
            </CastItem>
          );
        })
      )}
    </ArtistGallery>
  );
};

export default Cast;