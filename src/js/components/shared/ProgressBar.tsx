import * as React from 'react';

interface Props {
  progress: number;
  max: number;
}

const ProgressBar = (props: Props) => {
  const percentage = Math.round((props.progress * 100) / props.max);

  const fillerStyles = {
    width: `${percentage}%`,
  };

  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className="bg-brand text-lg font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={fillerStyles}
      >
        {` ${percentage}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
