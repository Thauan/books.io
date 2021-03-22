import { useEffect } from 'react';
import { ContainerFooter, Page, ButtonNext, ButtonPrev } from './style';

interface FooterProps {
  pageInitial: string;
  pageTotal: string;
  nextPage: any;
  prevPage: any;
}

const Footer: React.FC<FooterProps> = ({
  pageInitial,
  pageTotal,
  nextPage,
  prevPage,
}: any) => {
  return (
    <ContainerFooter>
      <Page>
        Página {pageInitial} de {parseInt(pageTotal, 10)}
      </Page>
      <ButtonPrev onClick={() => prevPage(pageInitial)}>{'<'}</ButtonPrev>
      <ButtonNext onClick={() => nextPage(pageInitial)}>{'>'}</ButtonNext>
    </ContainerFooter>
  );
};

export default Footer;
