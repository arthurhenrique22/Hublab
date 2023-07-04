import React, { ReactNode } from 'react'

import ChecklistIcon from '@mui/icons-material/Checklist';
interface Data {
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    description: 'Plataforma FIDIGITAL para Conexão de Startups (HUB match); ',
    icon: <ChecklistIcon />,
  },
  {
    description: 'Ampla rede integrada de parceiros de negócios estratégicos (ILOVE networking)',
    icon: <ChecklistIcon />,
  },
  {
    description: 'Mentorias de ALTA Performance (física e/ou digital);',
    icon: <ChecklistIcon />,
  },
  {
    description: 'Integração com LABs para acelerar o ciclo de MVP das Startups (problema->prototipagem->validação->produto->vendas);',
    icon: <ChecklistIcon />,
  },
  {
    description: 'Apoio direto com fluxos que exigem mentoria regulatória (LGPD), legal, contábil, administrativo, comercial, modelo de negócio, inovação, marketing, vendas, growth e tecnologia da informação',
    icon: <ChecklistIcon />,
  },
  
]
