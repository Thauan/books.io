import { Container, Grid, Item, BookName } from './style';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Header from '../../components/Header';

const LibraryBooks: React.FC = () => {
  const { height, width } = useWindowDimensions();

  console.log('to aquui');

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
