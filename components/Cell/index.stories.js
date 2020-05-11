import React from 'react';
import { action } from '@storybook/addon-actions';

import Cell from './index.tsx';

export default {
    component: Cell,
    title: 'Cell',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
  };


export const Dead = () => <Cell alive={false} history={false} handleClick={action('handleClick')} />
export const Alive = () => <Cell alive={true} history={false} handleClick={action('handleClick')} />
export const History = () => <Cell alive={false} history={true} handleClick={action('handleClick')} />
