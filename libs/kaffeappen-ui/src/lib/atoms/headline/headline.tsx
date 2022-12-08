import styled from 'styled-components';

type HeadlineTypes = {
  children:React.ReactNode;
};

const StyledHeadline = styled.h1<HeadlineTypes>`
color:#623B30;
font-size:1.8rem;
font-weight:normal;
width:fit-content;
height:40px;
text-align:center;
border:1px solid #000;
border-radius:3px;
padding:0 8px;
text-transform:uppercase;
margin-top:70px;

`;

const HeadlineComponent = ({ children}: HeadlineTypes) => {
  return (
    <StyledHeadline >
      {children}
    </StyledHeadline>
  );
};

export default HeadlineComponent;
