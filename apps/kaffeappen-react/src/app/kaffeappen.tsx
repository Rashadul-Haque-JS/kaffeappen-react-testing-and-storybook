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
  const [rePassword, setrePassword] = useState<string>('');
  const [isLogin, setisLogin] = useState<boolean>(true);

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username || !password) {
      alert('Both username and password are required');
    }

    const userData = { username, password };
    console.log(userData);
    alert(
      `Credentials which could have been submited in real login: \n ${JSON.stringify(
        userData
      )}`
    );
  };

  const handleSwitching = () => {
    return isLogin ? setisLogin(false) : setisLogin(true);
  };

  const handleSubmiSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      'I am functional, but no endpoint yet to send your request! Pls try again later!'
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        height: '100vh',
      }}
    >
      {isLogin && (
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
            onClick={handleSwitching}
          />
        </DivComponent>
      )}

      {!isLogin && (
        <DivComponent>
          <HeadlineComponent>Registrera dig</HeadlineComponent>
          <FormComponent onSubmit={handleSubmiSignup}>
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
            <InputComponent
              placeholder="upprepa lösenord"
              type={'password'}
              onChange={(e) => setrePassword(e.target.value)}
            />
            <ButtonComponent
              children="Registrera"
              variant="secondary"
              marginTop={64}
            />
          </FormComponent>
          <ButtonComponent
            variant="primary"
            marginTop={2}
            onClick={handleSwitching}
          >
            Till logga in
          </ButtonComponent>
        </DivComponent>
      )}
    </div>
  );
};

export default Kaffeappen;
