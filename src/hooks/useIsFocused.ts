import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useVisible} from './useVisible';

interface UseIsFocusedProps {
  unFocusCleanUp?: () => void;
}

export function useIsFocused({unFocusCleanUp}: UseIsFocusedProps) {
  const navigation = useNavigation();
  const {visible, setVisible} = useVisible();

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      setVisible(true);
    });

    navigation.addListener('blur', () => {
      setVisible(false);
      if (unFocusCleanUp) {
        unFocusCleanUp();
      }
    });
  }, [navigation, setVisible, unFocusCleanUp]);

  return {isFocused: visible};
}
