import styled from 'styled-components';

type ButtonTypes = {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  marginTop:number;
};

const StyledButton = styled.button<ButtonTypes>`
background:${(props) => (props.variant === 'primary' ? '#DDB63E' : '#97B09D')};
color:#000;
font-weight:bold;
width:270px;
height:50px;
text-align:center;
text-transform:uppercase;
border:none;
border-radius:36px;
cursor:pointer;
margin-top:${(props)=> props.marginTop + 'px'};

`;

const ButtonComponent = ({ children, variant,marginTop }: ButtonTypes) => {
  return (
    <StyledButton variant={variant} marginTop={marginTop}>
      {children}
    </StyledButton>
  );
};

export default ButtonComponent;
