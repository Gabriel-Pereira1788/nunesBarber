import React from 'react';

export interface ProgressBarViewModel {
  styleProgress: {
    opacity: 0.5 | 1.3;
    width: number;
  };
  setCurrentProgress: React.Dispatch<React.SetStateAction<number>>;
  setTotalProgress: React.Dispatch<React.SetStateAction<number>>;
}
