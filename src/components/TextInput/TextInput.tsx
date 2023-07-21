import { TextInput as MTextInput } from '@mantine/core';
import { TextInputProps as Props } from './TextInput.types';
import { FC } from 'react';

const TextInput: FC<Props> = props => {
  const {
    size = 'xl',
    radius = 'xl',
    styles = theme => ({
      input: {
        fontWeight: 600,
        backgroundColor: theme.colors.bunting[6],
        color: 'white',
        '::placeholder': { color: 'white', opacity: 0.5 },
      },
      error: { fontWeight: 600 },
    }),
  } = props;
  const { ...rest } = props;

  return <MTextInput {...{ size, radius, styles }} {...rest}></MTextInput>;
};

export default TextInput;
