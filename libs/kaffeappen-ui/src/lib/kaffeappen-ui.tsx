import styled from 'styled-components';

/* eslint-disable-next-line */
export interface KaffeappenUiProps {}

const StyledKaffeappenUi = styled.div`
  color: pink;
`;

export function KaffeappenUi(props: KaffeappenUiProps) {
  return (
    <StyledKaffeappenUi>
      <h1>Welcome to KaffeappenUi!</h1>
    </StyledKaffeappenUi>
  );
}

export default KaffeappenUi;
