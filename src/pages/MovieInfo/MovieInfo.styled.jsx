import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDetailsBlock = styled.div`
  padding: 24px 32px;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 90px;
  background-color: #0d2142;
  color: #963d77;
  padding: 6px 8px;
  border-radius: 4px;
  &:hover {
    color: #062961;
    background-color: #7997c7;
  }
`;

export const MovieInfoSection = styled.div`
  padding: 32px 0;
  display: flex;
  gap: 36px;
`;

export const TextContentThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const OverviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GenresBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AdditionalInfoBox = styled.div`
  padding: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  gap: 16px;
`;

export const AdditionalItemLink = styled(Link)`
  color: #baed42;
  &:hover {
    color: #3bd984;
  }
`;