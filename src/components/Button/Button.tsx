import { Button as MButton } from '@mantine/core';
import { FC } from 'react';

import { ButtonProps as Props } from './Button.types';

const Button: FC<Props> = props => {
  const {
    bg = 'screenGlow',
    c = 'riverStyx',
    radius = 'xl',
    size = 'lg',
    styles = { root: { '&:hover': { backgroundColor: '#B3FFE2' } } },
  } = props;
  const { children, ...rest } = props;

  return (
    <MButton {...{ bg, c, radius, size, styles }} {...rest}>
      {children}
    </MButton>
  );
};

export default Button;
