export interface ModalRefProps {
  visible: boolean;
  hide: () => void;
  show: (Component: React.FC) => void;
}

export interface ModalViewModel {
  visible: boolean;
  hide: () => void;
}
