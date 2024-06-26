import React, { FC } from "react";

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const SearchComponent: FC<Props> = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      fillRule="evenodd"
      fill={color}
      clipRule="evenodd"
      d="M15.1283 5.74756C10.1581 5.74756 6.12891 9.77672 6.12891 14.7469C6.12891 19.7172 10.1581 23.7463 15.1283 23.7463C17.1497 23.7463 19.0155 23.0798 20.5178 21.9546L24.5042 25.941C25.0063 26.4431 25.8203 26.4431 26.3224 25.941C26.8244 25.4389 26.8244 24.6249 26.3224 24.1229L22.336 20.1365C23.4612 18.6341 24.1277 16.7684 24.1277 14.7469C24.1277 9.77672 20.0985 5.74756 15.1283 5.74756ZM8.70016 14.7469C8.70016 11.1968 11.5781 8.31881 15.1283 8.31881C18.6784 8.31881 21.5564 11.1968 21.5564 14.7469C21.5564 18.2971 18.6784 21.1751 15.1283 21.1751C11.5781 21.1751 8.70016 18.2971 8.70016 14.7469Z"
    />
  </svg>
);

export default SearchComponent;
