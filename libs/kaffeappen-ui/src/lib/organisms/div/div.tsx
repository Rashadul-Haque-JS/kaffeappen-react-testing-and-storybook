import styled from 'styled-components';
import bgImg from '../../assets/kaffeappen.png'
type DivTypes = {
  children: JSX.Element[] | JSX.Element ;
};

const StyledDiv = styled.div<DivTypes>`
background:url(${bgImg});
background-size:cover;
background-repeat:no-repeat;
border:none;
cursor:pointer;
height: 742px;
width: 375px;
border-radius: 0px;
display:flex;
flex-direction:column;
justify-content: start;
align-items:center;

`;

const DivComponent = ({ children }: DivTypes) => {
  return (
    <StyledDiv>
    {children}
    </StyledDiv>
  );
};

export default DivComponent;