import React from 'react';
import { ICONS } from './svg';

export type IconKey = keyof typeof ICONS;

export interface SvgIconProps extends React.ComponentPropsWithRef<'svg'> {}
