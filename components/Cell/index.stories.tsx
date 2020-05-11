import React from 'react';
import {storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions"

import Cell from './';

storiesOf('Cell', module).add('Alive', () => <Cell alive={true} history={false} handleClick={action('handleClick')} />)
storiesOf('Cell', module).add('Dead', () => <Cell alive={false} history={false} handleClick={action('handleClick')} />)
storiesOf('Cell', module).add('History', () => <Cell alive={false} history={true} handleClick={action('handleClick')} />)
