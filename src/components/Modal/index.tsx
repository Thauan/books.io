import { ContainerModal, Content } from './style';

export interface ModalProps {
  show: boolean;
  onClose: any;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }: any) => {
  if (!show) {
    return null;
  }
  return (
    <ContainerModal id="modal">
      <Content>{children}</Content>
    </ContainerModal>
  );
};

export default Modal;
