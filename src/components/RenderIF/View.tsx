import React from 'react';

type Props = {
  condition: boolean;
  children: React.ReactNode;
};

export default function RenderIF({condition, children}: Props) {
  return <>{condition && children}</>;
}
