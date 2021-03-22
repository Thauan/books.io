import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Grid,
  Item,
  BookName,
  BoxLoading,
  AuthorName,
  CoverBook,
  Informations,
  BookInfos,
  PageCount,
  Publisher,
  PublishedAt,
  ContainerModal,
} from './style';
import LoaderPage from '../../components/LoaderPage';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import BookItem from '../../components/BookItem';

const LibraryBooks: React.FC = () => {
  const { height, width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  const books = useSelector((state: any) => state.books.books);
  const bookDetail = useSelector((state: any) => state.books.bookDetail);
  const isLoading = useSelector((state: any) => state.loading.isLoading);
  const dispatch = useDispatch();
  const getBooks = (): any => dispatch({ type: 'ASYNC_BOOKS' });

  const ToggleModal: any = () => {
    setShowModal(!showModal);
  };

  const getBookDetails: any = (id: any) => {
    dispatch({ type: 'ASYNC_BOOK_DETAILS', payload: id });
    ToggleModal();
  };

  useEffect(() => {
    getBooks();
  }, []);

  console.log(bookDetail);

  return (
    <>
      {showModal ? (
        <ContainerModal height={height}>
          <Modal onClose={ToggleModal} show={showModal}>
            <CoverBook src={bookDetail.imageUrl} />
          </Modal>
        </ContainerModal>
      ) : (
        <></>
      )}
      <Container height={height}>
        <Header />
        {books.data && !isLoading && books.data !== undefined ? (
          <Grid>
            <BookItem books={books} getBookDetails={getBookDetails} />
          </Grid>
        ) : (
          <BoxLoading height={height}>
            <LoaderPage />
          </BoxLoading>
        )}
      </Container>
    </>
  );
};

export default LibraryBooks;
