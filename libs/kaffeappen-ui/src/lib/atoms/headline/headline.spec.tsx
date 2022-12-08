import { render } from '@testing-library/react';
import HeadlineComponent from './headline';


describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeadlineComponent>Kaffeappen</HeadlineComponent>);
    expect(baseElement).toBeTruthy();
  });

  

  it('should match snapshot successfully', () => {
    const { baseElement } = render(<HeadlineComponent>kaffeappen</HeadlineComponent>);
    expect(baseElement).toMatchSnapshot();
  });

  
});