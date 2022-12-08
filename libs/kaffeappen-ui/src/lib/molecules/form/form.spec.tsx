import { render } from '@testing-library/react';
import FormComponent from './form';
import ButtonComponent from '../../atoms/button/button';
import InputComponent from '../../atoms/input/input';

describe('Form', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FormComponent>
        <InputComponent placeholder="användernamn" type={'text'} />
        <InputComponent placeholder="lösenord" type={'password'} />
        <ButtonComponent children="Logga In" variant="primary" marginTop={40} />
      </FormComponent>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot successfully', () => {
    const { baseElement } = render(
      <FormComponent>
        <InputComponent placeholder="användernamn" type={'text'} />
        <InputComponent placeholder="lösenord" type={'password'} />
        <ButtonComponent children="Logga In" variant="primary" marginTop={40} />
      </FormComponent>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
