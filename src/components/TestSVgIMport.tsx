import React from 'react';
import { ReactComponent as TestIcon } from '../assets/icons/calories-icon.svg';

const TestSvgImport = () => {
  return (
    <div>
      <h1>Test SVG Import</h1>
      <TestIcon width={50} height={50} />
    </div>
  );
};

export default TestSvgImport;