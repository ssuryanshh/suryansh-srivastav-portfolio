import React from 'react';
import './style.scss';

function PageHeader({ headerText }) {
  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
    </div>
  );
}

export default PageHeader;
