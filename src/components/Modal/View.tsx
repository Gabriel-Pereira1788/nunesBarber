import React from 'react';
import * as S from 'native-base';
import {ModalRefProps} from './model';
import {useModal} from './useModal';

interface ModalProps extends S.IModalProps {}

export const modalRef = React.createRef<ModalRefProps>();

export default function Modal({}: ModalProps) {
  const [ShowComponent, setShowComponent] = React.useState<React.FC>(() => (
    <></>
  ));

  const {visible, hide} = useModal({modalRef, setShowComponent});

  return (
    <S.Modal onClose={hide} isOpen={visible}>
      {ShowComponent}
    </S.Modal>
  );
}
