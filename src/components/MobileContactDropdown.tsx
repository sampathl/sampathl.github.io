import React from 'react';
import {
  Paper,
  Box,
  Typography,
  IconButton,
  Collapse,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  ContactSupport as ContactIcon,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { getTranslation, TranslationKeys } from '../i18n/translations';

interface MobileContactDropdownProps {
  language: string;
  expanded: boolean;
  onToggle: () => void;
}

const MobileContactDropdown: React.FC<MobileContactDropdownProps> = ({
  language,
  expanded,
  onToggle,
}) => {
  // Translation function
  const t = (key: keyof TranslationKeys): string => getTranslation(language, key);

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        borderRadius: '24px',
        bgcolor: 'background.paper',
        mb: 2,
        overflow: 'hidden',
      }}
    >
      <Box
        onClick={onToggle}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <ContactIcon />
          <Typography variant="h6" sx={{ fontFamily: 'Work Sans, sans-serif' }}>
            Contact Information
          </Typography>
        </Box>
        <ExpandMoreIcon 
          sx={{ 
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }} 
        />
      </Box>
      
      <Collapse in={expanded}>
        <Box sx={{ p: 2, pt: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <EmailIcon fontSize="small" />
            <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif' }}>
              {t('email')}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <PhoneIcon fontSize="small" />
            <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif' }}>
              {t('phone')}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <LocationIcon fontSize="small" />
            <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif' }}>
              {t('location')}
            </Typography>
          </Box>
          
          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton 
              size="small"
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'action.hover' 
                } 
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton 
              size="small"
              sx={{ 
                '&:hover': { 
                  backgroundColor: 'action.hover' 
                } 
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Collapse>
    </Paper>
  );
};

export default MobileContactDropdown; 