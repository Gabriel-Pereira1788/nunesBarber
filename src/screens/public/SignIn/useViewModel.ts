import React from 'react';
type HookuseSignInProps = {};

export function useSignIn(hookProps: HookuseSignInProps) {
  const [state, setState] = React.useState('');

  return {state};
}
