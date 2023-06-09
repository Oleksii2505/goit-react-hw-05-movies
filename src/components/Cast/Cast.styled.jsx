import styled from '@emotion/styled';

export const CastItem = styled.li`
  border-radius: 10px;
  overflow: hidden;
  background-color: #49248a;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  transition-duration: 250ms;
  transition-property: scale;
  transition-timing-function: ease-in-out;
`;

export const ProfileImgBox = styled.div``;

export const ArtistGallery = styled.ul`
  padding: 32px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ArtistNameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 16px 0;
  text-align: center;
  font-size: 12px;
`;

export const ArtistPhoto = styled.img`
  object-fit: cover;
`;