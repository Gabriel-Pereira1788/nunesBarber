import React from 'react';
import * as S from 'native-base';

interface ModalProps extends S.IModalProps {}

interface ModalRefProps {
  visible: boolean;
  hide: () => void;
  show: (Component: React.FC) => void;
}

export const modalRef = React.createRef<ModalRefProps>();

export default function Modal({}: ModalProps) {
  const [visible, setVisible] = React.useState(false);
  const [ShowComponent, setShowComponent] = React.useState<React.FC>(() => (
    <></>
  ));

  function hide() {
    setVisible(false);
  }

  function show(Component: React.FC) {
    setShowComponent(Component);
    setVisible(true);
  }

  React.useImperativeHandle(modalRef, () => ({hide, show, visible}));

  return (
    <S.Modal onClose={hide} isOpen={visible}>
      {ShowComponent}
    </S.Modal>
  );
}
