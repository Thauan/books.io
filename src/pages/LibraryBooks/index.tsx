import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Grid, BoxLoading, ContainerModal } from './style';
import LoaderPage from '../../components/LoaderPage';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import BookItem from '../../components/BookItem';
import BookItemDetail from '../../components/BookItemDetail';
import Footer from '../../components/Footer';

const LibraryBooks: React.FC = () => {
  const { height } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  const books = useSelector((state: any) => state.books.books);
  const bookDetail = useSelector((state: any) => state.books.bookDetail);
  const isLoading = useSelector((state: any) => state.loading.isLoading);
  const dispatch = useDispatch();
  const getBooks = (): any => dispatch({ type: 'ASYNC_BOOKS', payload: 1 });

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
    getBooks();
  }, []);

  return (
    <>
      {showModal ? (
        <ContainerModal height={height} onClick={ToggleModal}>
          <Modal onClose={ToggleModal} show={showModal}>
            <BookItemDetail book={bookDetail} />
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
