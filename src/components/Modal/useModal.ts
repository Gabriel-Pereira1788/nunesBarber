import React from 'react';
import {ModalRefProps, ModalViewModel} from './model';
type HookuseModalProps = {
  modalRef: React.RefObject<ModalRefProps>;
  setShowComponent: React.Dispatch<React.SetStateAction<React.FC<{}>>>;
};

export function useModal({
  modalRef,
  setShowComponent,
}: HookuseModalProps): ModalViewModel {
  const [visible, setVisible] = React.useState(false);

  function hide() {
    setVisible(false);
  }

  function show(Component: React.FC) {
    setShowComponent(Component);
    setVisible(true);
  }

  React.useImperativeHandle(modalRef, () => ({hide, show, visible}));

  return {visible, hide};
}
