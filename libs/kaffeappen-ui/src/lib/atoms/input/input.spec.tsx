import { render } from '@testing-library/react';
import InputComponent from './input';


describe('Input field', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputComponent placeholder={'användarnamn'} type={'text'}/>);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot successfully', () => {
    const { baseElement } = render(<InputComponent  placeholder={'lösenord'} type={'password'}/>);
    expect(baseElement).toMatchSnapshot();
  });
});