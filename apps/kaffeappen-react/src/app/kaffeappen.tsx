import {
  DivComponent,
  FormComponent,
  ButtonComponent,
  InputComponent,
  HeadlineComponent,
} from '@nx-demo-storybook/kaffeappen-ui';
import { useState } from 'react';

const Kaffeappen = () => {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username || !password) {
      alert('Both username and password are required');
    }

    const userData = { username, password };
    console.log(userData);
    alert(`Credentials which could have been submited in real login: \n ${JSON.stringify(userData)}`);
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    html {
      scroll-behavior: smooth;
    }
    body {
      display: flex;;
      justify-content: center;
      align-items: start;
      padding:30px 0px;
    }
    
          `,
        }}
      />
      <DivComponent>
        <HeadlineComponent>kaffeappen</HeadlineComponent>
        <FormComponent onSubmit={handleSubmitLogin}>
          <InputComponent
            placeholder="användarnamn"
            type={'text'}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputComponent
            placeholder="lösenord"
            type={'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonComponent variant="primary" marginTop={66}>
            Logga In
          </ButtonComponent>
        </FormComponent>
        {/* Use of Button components in another way */}
        <ButtonComponent
          children="Registrera"
          variant="secondary"
          marginTop={2}
        />
      </DivComponent>
      ,
    </>
  );
};

export default Kaffeappen;
