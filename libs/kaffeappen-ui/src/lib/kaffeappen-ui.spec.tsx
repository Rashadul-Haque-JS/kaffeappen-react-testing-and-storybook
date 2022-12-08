import { render } from '@testing-library/react';

import KaffeappenUi from './kaffeappen-ui';

describe('KaffeappenUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KaffeappenUi />);
    expect(baseElement).toBeTruthy();
  });
});
