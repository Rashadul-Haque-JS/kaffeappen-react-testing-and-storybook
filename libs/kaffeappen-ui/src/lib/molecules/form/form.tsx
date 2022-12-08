import styled from 'styled-components';

type FormTypes = {
  children: JSX.Element[];
  onSubmit?:(event: React.FormEvent<HTMLFormElement>)=>void;
};

const StyledForm = styled.form<FormTypes>`
background:'none';
width:80%;
height:fit-content;
border:none;
display:flex;
flex-direction:column;
align-items:center;
padding:16px;

`;

const FormComponent = ({ children, onSubmit }: FormTypes) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default FormComponent;
