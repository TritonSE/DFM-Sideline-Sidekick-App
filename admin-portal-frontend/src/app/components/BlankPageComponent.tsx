import React, { FC } from 'react';

interface Props {
    category?: string;
  }

const BlankPageComponent: FC<Props> = ({ category }) => {
    return (
        <div>
            <p>This is the blank page </p>
        </div>
    );
};

export default BlankPageComponent;
