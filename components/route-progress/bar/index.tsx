import React from 'react';

interface IProps {
  animationDuration: number;
  progress: number;
}

const Bar: React.FC<IProps> = ({ animationDuration, progress }) => {
  return (
    <div
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
      className="fixed top-0 left-0 w-full h-1 z-[9999] bg-gradient-to-br from-orange-500 via-teal-400 to-purple-500"
    ></div>
  );
};

export default Bar;
