import React from 'react';
import * as S from 'native-base';
import {ModalRefProps} from './model';
import {useModal} from './useModal';

interface ModalProps extends S.IModalProps {}

export const modalRef = React.createRef<ModalRefProps>();

export default function Modal({children, ...rest}: ModalProps) {
  const [ShowComponent, setShowComponent] = React.useState<React.FC>(() => (
    <></>
  ));

  const {visible, hide} = useModal({modalRef, setShowComponent});

  return (
    <S.Modal testID="modal" onClose={hide} isOpen={visible} {...rest}>
      {children ? children : ShowComponent}
    </S.Modal>
  );
}
