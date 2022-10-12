import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Input } from '../Input';
import { Container, Error } from './styles';

interface IProps extends TextInputProps {
  control: Control<any>;
  name: string;
  error?: string;
}

export const InputForm = ({ control, name, error, ...rest }: IProps) => {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input {...rest} onChangeText={onChange} value={value} />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
