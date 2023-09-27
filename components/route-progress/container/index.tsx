import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  animationDuration: number;
  isFinished: boolean;
}

const Container: React.FC<IProps> = ({
  children,
  animationDuration,
  isFinished,
}) => {
  return (
    <div
      style={{
        pointerEvents: 'none',
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms liniear`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
