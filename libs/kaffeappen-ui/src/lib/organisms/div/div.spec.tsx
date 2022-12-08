import { render } from '@testing-library/react';
import DivComponent from './div';
import FormComponent from '../../molecules/form/form';
import ButtonComponent from '../../atoms/button/button';
import InputComponent from '../../atoms/input/input';
import HeadlineComponent from '../../atoms/headline/headline';

describe('Div', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DivComponent>
        <FormComponent>
          <InputComponent placeholder="användernamn" type={'text'} />
          <InputComponent placeholder="lösenord" type={'password'} />
          <ButtonComponent
            children="Logga In"
            variant="primary"
            marginTop={66}
          />
        </FormComponent>
        <ButtonComponent
          children="Registrera"
          variant="secondary"
          marginTop={2}
        />
      </DivComponent>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot successfully', () => {
    const { baseElement } = render(
      <DivComponent>
        <HeadlineComponent>Kaffeappen</HeadlineComponent>
        <FormComponent>
          <InputComponent placeholder="användernamn" type={'text'} />
          <InputComponent placeholder="lösenord" type={'password'} />
          <ButtonComponent
            children="Logga In"
            variant="primary"
            marginTop={66}
          />
        </FormComponent>
        <ButtonComponent
          children="Registrera"
          variant="secondary"
          marginTop={2}
        />
      </DivComponent>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
