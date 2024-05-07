import React, { FC } from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const GpComponent: FC<Props> = ({ width = '30.855px', height = '30.855px', color = "#182B49" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
    <path d="M9.26562 29.157H22.379" stroke={color} strokeWidth="2.81"/>
    <path d="M21.0639 3.86698V22.3672C21.0639 23.4019 20.2252 24.2406 19.1906 24.2406H12.3878C11.3532 24.2406 10.5145 23.4019 10.5145 22.3672V3.86699C10.5145 2.83237 11.3532 1.99365 12.3878 1.99365H19.1906C20.2252 1.99365 21.0639 2.83237 21.0639 3.86698Z" stroke={color} strokeWidth="2.81"/>
  </svg>
);

export default GpComponent;
