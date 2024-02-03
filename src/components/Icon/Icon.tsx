import React, { createElement } from 'react';
import { IconKey } from './Icon.types.ts';
import { ICONS } from './svg';

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  src: IconKey;
}

export const Icon = ({ src, ...rest }: IconProps) =>
  createElement(ICONS[src], {
    ...rest,
  });
