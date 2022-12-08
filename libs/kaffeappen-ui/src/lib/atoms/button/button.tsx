import styled from 'styled-components';

type ButtonTypes = {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  marginTop:number;
  onClick?:(event: React.MouseEvent<HTMLElement>) =>void
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

const ButtonComponent = ({ children, variant,marginTop , onClick }: ButtonTypes) => {
  return (
    <StyledButton variant={variant} marginTop={marginTop} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default ButtonComponent;
