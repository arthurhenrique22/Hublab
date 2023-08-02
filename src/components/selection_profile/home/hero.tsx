// Importações das bibliotecas e componentes necessários
import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledButton } from '@/components/main/styled-button';
import { Dialog, DialogTitle, DialogContent, DialogActions, useMediaQuery, useTheme } from '@mui/material';
import { Person as StartupIcon, Business as InvestorIcon, School as MentorIcon, Science as ScientistIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Definição dos tipos e interfaces
type ProfileType = 'startup' | 'investidor' | 'mentor' | 'cientista';

interface Profile {
    type: ProfileType;
}

// Constante que define o número máximo de perfis
const MAX_PROFILES = 4;

// Componente HomeHero, que é uma função componente React
const HomeHero: FC = () => {
    // Utilização dos hooks do React para obter informações sobre o tema e o tamanho da tela
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Utilização do useState para armazenar o estado dos perfis, se o diálogo está aberto e outras informações
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [open, setOpen] = useState(false);
    const [showDeleteIcons, setShowDeleteIcons] = useState(false);
    const [showLimitMessage, setShowLimitMessage] = useState(false);

    // Função que é chamada quando o botão "Adicionar perfil" é clicado
    const handleOpen = () => {
        if (profiles.length < MAX_PROFILES) {
            // Abre o diálogo se o número máximo de perfis ainda não foi atingido
            setOpen(true);
        } else {
            // Exibe a mensagem de limite caso o número máximo de perfis já tenha sido atingido
            setShowLimitMessage(true);
            setTimeout(() => {
                setShowLimitMessage(false);
            }, 3500); // Esconde a mensagem após 3.5 segundos
        }
    };

    // Função que é chamada quando o diálogo é fechado
    const handleClose = () => {
        setOpen(false);
        setShowLimitMessage(false);
    };

    // Função para adicionar um novo perfil à lista de perfis
    const addProfile = (profileType: string) => {
        if (profiles.length < MAX_PROFILES) {
            // Validar se o profileType é um valor válido do tipo ProfileType
            if (['startup', 'investidor', 'mentor', 'cientista'].includes(profileType)) {
                const newProfile: Profile = {
                    type: profileType as ProfileType, // Faz a conversão para o tipo correto
                };
                setProfiles([...profiles, newProfile]);
            }
        }
        handleClose();
    };

    // Função para remover um perfil da lista de perfis
    const removeProfile = (index: number) => {
        const newProfiles = [...profiles];
        newProfiles.splice(index, 1);
        setProfiles(newProfiles);
        setShowDeleteIcons(false);
    };

    // Opções de perfis disponíveis com seus respectivos ícones e rótulos
    const profileOptions = [
        { type: 'startup', icon: <StartupIcon fontSize="large" />, label: 'Startup' },
        { type: 'investidor', icon: <InvestorIcon fontSize="large" />, label: 'Investidor' },
        { type: 'mentor', icon: <MentorIcon fontSize="large" />, label: 'Mentor' },
        { type: 'cientista', icon: <ScientistIcon fontSize="large" />, label: 'Cientista' },
    ];

    // Estilizações dos ícones de perfil com base no tamanho da tela
    const LargeIcon = styled(StartupIcon)(({ theme }) => ({
        fontSize: theme.typography.pxToRem(isMobile ? 40 : 75),
    }));

    const InvestorLargeIcon = styled(InvestorIcon)(({ theme }) => ({
        fontSize: theme.typography.pxToRem(isMobile ? 40 : 75),
    }));

    const MentorLargeIcon = styled(MentorIcon)(({ theme }) => ({
        fontSize: theme.typography.pxToRem(isMobile ? 40 : 75),
    }));

    const ScientistLargeIcon = styled(ScientistIcon)(({ theme }) => ({
        fontSize: theme.typography.pxToRem(isMobile ? 40 : 75),
    }));

    // Renderização do componente HomeHero
    return (
        <Box
            id="hero"
            sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                position: 'relative',
                pt: 12,
                pb: { xs: 8, md: 10 },
                textAlign: 'center',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="lg" sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        minHeight: '100%',
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
                            Selecione o seu perfil{' '}
                        </Typography>
                    </Box>

                    {/* Exibe a mensagem de limite caso o número máximo de perfis tenha sido atingido */}
                    {showLimitMessage && (
                        <Typography color="error" sx={{ marginBottom: '16px' }}>
                            Você não pode criar mais de 4 perfis.
                        </Typography>
                    )}

                    <Box sx={{ display: 'flex', gap: '16px', m: '16px' }}>
                        {/* Botão para abrir o diálogo de seleção de perfil */}
                        <StyledButton color="light" size="large" variant="contained" type="submit" onClick={handleOpen}>
                            Adicionar perfil
                        </StyledButton>
                        {/* Botão para exibir ou ocultar ícones de exclusão de perfil */}
                        {profiles.length > 0 && (
                            <StyledButton
                                color="light"
                                size="large"
                                variant="contained"
                                type="submit"
                                onClick={() => setShowDeleteIcons(!showDeleteIcons)}
                            >
                                {showDeleteIcons ? 'Concluir' : 'Excluir perfil'}
                            </StyledButton>
                        )}
                    </Box>

                    {/* Exibe os ícones de perfil selecionados */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '8px' : '32px', flexDirection: isMobile ? 'column' : 'row' }}>
                        {profiles.map((profile, index) => (
                            <div key={index}>
                                {/* Renderiza o ícone e o rótulo do perfil com base no tipo de perfil selecionado */}
                                {profile.type === 'startup' && (
                                    <>
                                        <LargeIcon />
                                        <Typography>Startup</Typography>
                                    </>
                                )}
                                {profile.type === 'investidor' && (
                                    <>
                                        <InvestorLargeIcon />
                                        <Typography>Investidor</Typography>
                                    </>
                                )}
                                {profile.type === 'mentor' && (
                                    <>
                                        <MentorLargeIcon />
                                        <Typography>Mentor</Typography>
                                    </>
                                )}
                                {profile.type === 'cientista' && (
                                    <>
                                        <ScientistLargeIcon />
                                        <Typography>Cientista</Typography>
                                    </>
                                )}
                                {/* Botão para excluir o perfil */}
                                {showDeleteIcons && (
                                    <IconButton onClick={() => removeProfile(index)} color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                )}
                            </div>
                        ))}
                    </Box>

                    {/* Diálogo para seleção de perfil */}
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Selecione um perfil</DialogTitle>
                        <DialogContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                {/* Renderiza os botões com as opções de perfil */}
                                {profileOptions.map((option) => (
                                    <StyledButton key={option.type} color="light" size="large" variant="contained" type="submit" onClick={() => addProfile(option.type)}>
                                        {option.icon}
                                        {option.label}
                                    </StyledButton>
                                ))}
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            {/* Botão para cancelar a seleção de perfil */}
                            <StyledButton onClick={handleClose} color="primary">
                                Cancelar
                            </StyledButton>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Container>
        </Box>
    );
};

// Exporta o componente HomeHero
export default HomeHero;
