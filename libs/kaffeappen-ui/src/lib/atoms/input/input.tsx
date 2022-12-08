import styled from 'styled-components';

interface InputField  {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string;
  type:string;
 
  
};

const StyledInput = styled.input<InputField>`
background:#fff;
font-size:1rem;
line-height:4px;
width:275px;
height:44px;
text-align:center;
border:.5px solid #808080;
border-radius:3px;
display: block;
margin:5px 0px;
`;

const InputComponent = ({ placeholder, type, onChange}: InputField) => {
  return <StyledInput placeholder={placeholder} type={type} onChange={onChange} required/>
      
   
  
};

export default InputComponent;