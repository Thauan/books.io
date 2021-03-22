import {
  ContainerDetail,
  BookName,
  AuthorName,
  CoverBook,
  Informations,
  BookInfos,
  PageCount,
  Publisher,
  PublishedAt,
  Authors,
  TitleInformations,
  TitleReview,
  Review,
  InfoItem,
  TitleInfoItem,
} from './style';

interface DetailProps {
  book: any;
}

const BookItemDetail: React.FC<DetailProps> = ({ book }: any): any => {
  return (
    <ContainerDetail>
      <CoverBook src={book.imageUrl} />
      <Informations>
        <BookName>{book.title}</BookName>
        <Authors>
          {book.authors &&
            book.authors.map((author: any) => (
              <AuthorName>{author}</AuthorName>
            ))}
        </Authors>
        <TitleInformations>Informações</TitleInformations>
        <BookInfos>
          <InfoItem>
            <TitleInfoItem>Paginas:</TitleInfoItem>
            <PageCount>{book.pageCount} páginas</PageCount>
          </InfoItem>
          <InfoItem>
            <TitleInfoItem>Editora:</TitleInfoItem>
            <Publisher>Editora Loyola</Publisher>
          </InfoItem>
          <InfoItem>
            <TitleInfoItem>Publicação:</TitleInfoItem>
            <PublishedAt>Publicado em {book.published} </PublishedAt>
          </InfoItem>
        </BookInfos>
        <TitleReview>Resenha da editora</TitleReview>
        <Review>{book.description}</Review>
      </Informations>
    </ContainerDetail>
  );
};

export default BookItemDetail;
