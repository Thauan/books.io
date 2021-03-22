import styled from 'styled-components';

export const ContainerDetail = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 650px) {
    width: fit-content;
    flex-direction: column;
  }
`;

export const BookName = styled.h1`
  font-size: 28px;
  color: #333333;
  font-weight: 500;
  line-height: 40px;
`;

export const AuthorName = styled.h1`
  color: #ab2680;
  font-style: normal;
  font-weight: 400;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  margin: 0.2rem 0.5rem 0.5rem 0;
`;

export const Authors = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CoverBook = styled.img`
  height: auto;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));

  @media (max-width: 650px) {
    height: 21rem;
    width: 15rem;
    flex-direction: column;
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: -webkit-fill-available;
`;

export const BookInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleInfoItem = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #3333333;
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

export const Language = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const TitleOriginal = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const ISBN10 = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const ISBN13 = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const TitleInformations = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  text-transform: uppercase;
  color: #333333;
`;

export const TitleReview = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 28px;
  text-transform: uppercase;
  color: #333333;
`;

export const Review = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;
