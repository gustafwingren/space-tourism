import React from 'react';
import './NumberedTitle.css';

type NumberedTitleProps = {
  number: string;
  title: string;
};

function NumberedTitle({ number, title }: NumberedTitleProps) {
  return (
    <h2 className="numbered-title">
      <span>{number}</span>
      {title}
    </h2>
  );
}

export default NumberedTitle;
