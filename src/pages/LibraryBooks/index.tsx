import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoaderPage from '../../components/LoaderPage';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import BookItem from '../../components/BookItem';
import BookItemDetail from '../../components/BookItemDetail';
import Footer from '../../components/Footer';
import { Container, Grid, BoxLoading, ContainerModal } from './style';

const LibraryBooks: React.FC = () => {
  const { height } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const books = useSelector((state: any) => state.books.books);
  const isLoading = useSelector((state: any) => state.loading.isLoading);
  const bookDetail = useSelector((state: any) => state.books.bookDetail);
  const isLoadingBook = useSelector(
    (state: any) => state.loading.isLoadingBook,
  );

  const getBooks = (page: number): any =>
    dispatch({ type: 'ASYNC_BOOKS', payload: page });

  const ToggleModal: any = () => {
    setShowModal(!showModal);
  };

  const getBookDetails: any = (id: any) => {
    dispatch({ type: 'ASYNC_BOOK_DETAILS', payload: id });
    ToggleModal();
  };

  const getNextBookPage: any = (page?: any) => {
    dispatch({ type: 'ASYNC_BOOKS', payload: page + 1 });
  };

  const getPrevBookPage: any = (page?: any) => {
    dispatch({ type: 'ASYNC_BOOKS', payload: page - 1 });
  };

  useEffect(() => {
    getBooks(1);
  }, []);

  return (
    <>
      {showModal ? (
        <ContainerModal height={height} onClick={ToggleModal}>
          <Modal onClose={ToggleModal} show={showModal}>
            {!isLoadingBook ? (
              <BookItemDetail book={bookDetail} />
            ) : (
              <LoaderPage />
            )}
          </Modal>
        </ContainerModal>
      ) : (
        <></>
      )}
      <Container height={height}>
        <Header />
        {books.data && !isLoading && books.data !== undefined ? (
          <>
            <Grid>
              <BookItem books={books} getBookDetails={getBookDetails} />
            </Grid>
            <Footer
              pageInitial={books.page}
              pageTotal={books.totalPages}
              nextPage={getNextBookPage}
              prevPage={getPrevBookPage}
            />
          </>
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
