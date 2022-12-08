import { render } from '@testing-library/react';
import ButtonComponent from './button';


describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonComponent variant={'primary'} marginTop={40}>'Logga in'</ButtonComponent>);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<ButtonComponent variant={'secondary'} marginTop={2}>'Registrera'</ButtonComponent>);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot successfully', () => {
    const { baseElement } = render(<ButtonComponent variant={'primary'} marginTop={40}>'Logga in'</ButtonComponent>);
    expect(baseElement).toMatchSnapshot();
  });

  it('should match snapshot successfully', () => {
    const { baseElement } = render(<ButtonComponent variant={'secondary'} marginTop={2}>'Registrera'</ButtonComponent>);
    expect(baseElement).toMatchSnapshot();
  });
});