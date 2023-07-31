import React, { FC, } from 'react';
import Container from '@mui/material/Container';
import { Link as ScrollLink } from 'react-scroll';
import { StyledButton } from '@/components/main/styled-button';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Image from 'next/image';
import { Box, useMediaQuery } from '@mui/material';


const HomeHero: FC = () => {

    const isLargeScreen = useMediaQuery('(min-width: 600px)');

    const imageWidth = isLargeScreen ? 350 : 250;
    const imageHeight = isLargeScreen ? 350 : 250;
    return (
        <Box
            id="hero"
            sx={{
                backgroundColor: 'background.paper',
                position: 'relative',
                pb: { xs: 8, md: 10 },
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
                    <Box sx={{}}>
                        <Image src="/images/MatchMilhoes.png" width={imageWidth} height={imageHeight} alt="Hero img" />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '16px', m: '16px' }}>
                        <Link href="/login" passHref>
                            <a>
                                <StyledButton color="primary" size="large" variant="contained" type="submit">
                                    Entrar
                                </StyledButton>
                            </a>
                        </Link>
                        <ScrollLink to="solution" spy={true} smooth={true} offset={0} duration={350}>
                            <StyledButton color="primary" size="large" variant="contained" type="submit">
                                Cadastrar
                            </StyledButton>
                        </ScrollLink>
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
                                Cadastrar
                            </StyledButton>
                        </Box>

                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HomeHero;
