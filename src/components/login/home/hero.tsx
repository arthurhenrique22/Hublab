import React, { FC, } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link as ScrollLink } from 'react-scroll';
import { StyledButton } from '@/components/main/styled-button';
import TextField from '@mui/material/TextField';
import theme from '@/config/theme';
import Link from 'next/link';

const HomeHero: FC = () => {


    return (
        <Box
            id="hero"
            sx={{
                backgroundColor: 'background.paper',
                position: 'relative',
                pt: 12,
                pb: { xs: 8, md: 10 },
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            component="h2"
                            sx={{
                                position: 'relative',
                                fontSize: { xs: 40, md: 72 },
                                letterSpacing: 1.5,
                                fontWeight: 'bold',
                                lineHeight: 1.3,
                            }}
                        >
                            Bem-Vindo{' '}
                        </Typography>
                    </Box>
                    <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                        <Typography sx={{ color: 'text.secondary', lineHeight: 1 }}>
                            {"A nossa plataforma HUBMATCH ajuda você a encontrar os melhores parceiros que fazem sentido para o seu negócio."}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '16px', m: '16px' }}>
                        <ScrollLink to="solution" spy={true} smooth={true} offset={0} duration={350}>
                            <StyledButton color="primary" size="large" variant="contained" type="submit">
                                Entrar
                            </StyledButton>
                        </ScrollLink>
                        <Link href="/register" passHref>
                            <a>
                                <StyledButton color="primary" size="large" variant="contained" type="submit">
                                    Cadastrar
                                </StyledButton>
                            </a>
                        </Link>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            type="email"
                            label="E-mail"
                            variant="outlined"

                            sx={{ mb: 2, width: '300px', fontSize: '16px' }}
                        />
                        <TextField
                            type="password"
                            label="Senha"
                            variant="outlined"

                            sx={{ mb: 2, width: '300px', fontSize: '16px' }}
                        />
                        <Box sx={{ display: 'flex', gap: '16px', mt: '16px' }}>
                            <StyledButton
                                size="large"
                                variant="contained"
                                type="submit"
                            >
                                Entrar
                            </StyledButton>
                        </Box>
                        <Typography component="p" sx={{ color: 'text.secondary', mt: 2 }}>
                            Esqueceu a senha?{' '}
                            <a href="/recuperar-senha" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>
                                Clique aqui
                            </a>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HomeHero;
