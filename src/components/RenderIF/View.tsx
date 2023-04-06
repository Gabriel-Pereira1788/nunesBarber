import React from 'react';

type Props = {
  condition: boolean;
  children: React.ReactNode;
  AlternativeComponent?: JSX.Element;
};

export default function RenderIF({
  condition,
  children,
  AlternativeComponent,
}: Props) {
  if (!condition && AlternativeComponent) {
    return <>{AlternativeComponent}</>;
  }

  return <>{condition && children}</>;
}
