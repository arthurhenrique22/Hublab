import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { StyledButton } from '../styled-button';

const firebaseConfig = {
  apiKey: "AIzaSyBazT3SmWBJylKWSZQ2hEsa3ePwyEABCPo",
  authDomain: "landing-page-3108e.firebaseapp.com",
  databaseURL: "https://landing-page-3108e-default-rtdb.firebaseio.com",
  projectId: "landing-page-3108e",
  storageBucket: "landing-page-3108e.appspot.com",
  messagingSenderId: "290270490597",
  appId: "1:290270490597:web:71d72e353564019edac90c",
  measurementId: "G-63HB1JXXSR"
};
firebase.initializeApp(firebaseConfig);

const HomeNews: FC = () => {
  const [email, setEmail] = useState('');
  const [nextId, setNextId] = useState<number>(1);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  useEffect(() => {
    setEmail('');
    setIsEmailValid(true);
  }, []);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
    setIsEmailValid(true);
  };

  const handleSubscribe = (): void => {
    if (validateEmail(email)) {
      const database = firebase.database();
      const emailsRef = database.ref('emails');

      emailsRef.child(nextId.toString()).set({
        email: email,
      });

      setNextId(prevId => prevId + 1);

      setEmail('');
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          id="inscrever-se"
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: 10,
            py: { xs: 1, md: 2 },
            px: { xs: 1, md: 2 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Inscreva-se para receber novidades!
          </Typography>
          <Typography sx={{ mb: 6, color: '#FFFFFF' }}>Você receberá informações sobre os apps no seu e-mail.</Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 500 },
              mx: 'auto',
            }}
          >
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <Box>
              <StyledButton disableHoverEffect size="large" color='light' onClick={handleSubscribe}>
                Inscrever-se
              </StyledButton>
              {!isEmailValid && (
                <Typography sx={{ color: 'error.main', mt: 1 }}>Email inválido. Por favor, insira um email válido.</Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeNews;
