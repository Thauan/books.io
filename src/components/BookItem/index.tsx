import {
  Item,
  BookName,
  AuthorName,
  CoverBook,
  Informations,
  BookInfos,
  PageCount,
  Publisher,
  PublishedAt,
} from './style';

interface ItemProps {
  books: [];
  getBookDetails: any;
}

const BookItem: React.FC<ItemProps> = ({ books, getBookDetails }: any) => {
  return (
    <>
      {books.data.map((book: any) => (
        <Item key={book.id} onClick={() => getBookDetails(book.id)}>
          <CoverBook src={book.imageUrl} />
          <Informations>
            <BookName>{book.title}</BookName>
            {book.authors &&
              book.authors.map((author: any) => (
                <AuthorName key={Math.random()}>{author}</AuthorName>
              ))}
            <BookInfos>
              <PageCount>{book.pageCount} páginas</PageCount>
              <Publisher>Editora Loyola</Publisher>
              <PublishedAt>Publicado em {book.published} </PublishedAt>
            </BookInfos>
          </Informations>
        </Item>
      ))}
    </>
  );
};

export default BookItem;
