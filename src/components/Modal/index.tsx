import {
  ContainerModal,
  Content,
  BoxLoading,
  HeaderModal,
  Container,
  ButtonClose,
} from './style';
import useWindowDimensions from '../../utils/useWindowDimensions';
import LoaderPage from '../LoaderPage';

export interface ModalProps {
  show: boolean;
  onClose: any;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }: any) => {
  const { height } = useWindowDimensions();

  return (
    <Container height={height}>
      <HeaderModal>
        <ButtonClose onClick={onClose}>X</ButtonClose>
      </HeaderModal>
      <ContainerModal id="modal">
        {!show ? (
          <BoxLoading height={height}>
            <LoaderPage />
          </BoxLoading>
        ) : (
          <Content>{children}</Content>
        )}
      </ContainerModal>
    </Container>
  );
};

export default Modal;
