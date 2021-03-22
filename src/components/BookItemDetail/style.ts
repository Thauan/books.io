import styled from 'styled-components';

export const ContainerDetail = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
`;

export const BookName = styled.h1`
  font-size: 28px;
  color: #333333;
  font-weight: 500;
  line-height: 40px;
`;

export const AuthorName = styled.h3`
  color: #ab2680;
  font-style: normal;
  font-weight: 400;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  margin: 0;
`;

export const CoverBook = styled.img`
  height: auto;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const BookInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageCount = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const Publisher = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const PublishedAt = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;
