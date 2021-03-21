import { useState } from 'react';
import axios from 'axios';
import { Container, Grid, Item, BookName } from './style';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Header from '../../components/Header';

const LibraryBooks: React.FC = () => {
  const { height, width } = useWindowDimensions();
  const [loading, setLoading] = useState(false);

  const getBooks = (): any => {
    // axios
    //   .get('https://books.ioasys.com.br/api/v1/auth/sign-in', {
    //     email: 'desafio@ioasys.com.br',
    //     password: '12341234',
    //   })
    //   .then(function (response) {
    //     setLoading(true);
    //     delay(450);
    //     localStorage.setItem('auth@token', response.headers.authorization);
    //     setLoading(false);
    //     history.push('/home');
    //   })
    //   .catch(function (error) {
    //     setLogged(false);
    //     console.log(error);
    //   });
  };

  return (
    <Container height={height}>
      <Header />
      <Grid>
        <Item>
          <BookName>Crossing the Chasm</BookName>
        </Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Grid>
    </Container>
  );
};

export default LibraryBooks;
