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
        {book.authors &&
          book.authors.map((author: any) => <AuthorName>{author}</AuthorName>)}
        <BookInfos>
          <PageCount>{book.pageCount} páginas</PageCount>
          <Publisher>Editora Loyola</Publisher>
          <PublishedAt>Publicado em {book.published} </PublishedAt>
        </BookInfos>
      </Informations>
    </ContainerDetail>
  );
};

export default BookItemDetail;
