import React, { FC } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

interface Props {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  const isLargeScreen = useMediaQuery('(min-width: 600px)');

  const imageWidth = isLargeScreen ? 150 : 50;
  const imageHeight = isLargeScreen ? 150 : 50;

  return (
    <Box onClick={onClick} sx={{ display: 'flex', alignItems: 'center' }}>
      <Image src="/images/logo.png" width={imageWidth} height={imageHeight} alt="Hero img" />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
          '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' },
          marginLeft: '8px',
          fontSize: 32,
        }}
      >
        HUB<span>MATCH</span>
      </Typography>
    </Box>
  );
};

Logo.defaultProps = {
  variant: 'primary',
};

export default Logo;
