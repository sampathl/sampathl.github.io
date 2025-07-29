import React from 'react';
import {
  Avatar,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { getTranslation, TranslationKeys } from '../i18n/translations';

interface ProfileHeaderProps {
  language: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ language }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Translation function
  const t = (key: keyof TranslationKeys): string => getTranslation(language, key);

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        bgcolor: 'background.paper',
        mb: 2,
      }}
    >
      {/* Background Avatar/Photo */}
      <Avatar
        sx={{ 
          width: '100%',
          height: { xs: '200px', sm: '300px' },
          borderRadius: '24px',
          bgcolor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
            zIndex: 1,
          }
        }}
      >
        {/* Placeholder for profile photo */}
        <Typography 
          variant="h1" 
          sx={{ 
            fontFamily: 'Work Sans, sans-serif',
            color: 'white',
            zIndex: 2,
            position: 'relative',
            fontSize: { xs: '2rem', sm: '3rem' }
          }}
        >
          JD
        </Typography>
      </Avatar>

      {/* Name - Bottom Left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          p: { xs: 2, sm: 4 },
          color: 'white',
          zIndex: 2,
        }}
      >
        <Typography variant="h3" sx={{ 
          fontFamily: 'Work Sans, sans-serif', 
          mb: 1,
          fontSize: { xs: '1.5rem', sm: '2.125rem' }
        }}>
          {t('name')}
        </Typography>
        
        <Typography variant="h6" sx={{ 
          fontFamily: 'Inter, sans-serif', 
          opacity: 0.9,
          fontSize: { xs: '0.875rem', sm: '1.25rem' }
        }}>
          {t('title')}
        </Typography>
      </Box>

      {/* Contact Information - Bottom Right (Desktop Only) */}
      {!isMobile && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            p: { xs: 2, sm: 4 },
            color: 'white',
            zIndex: 2,
            textAlign: 'right',
          }}
        >
          {/* Contact Information */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-end', mb: 1 }}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2" sx={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}>
                {t('email')}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-end', mb: 1 }}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2" sx={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}>
                {t('phone')}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-end' }}>
              <LocationIcon fontSize="small" />
              <Typography variant="body2" sx={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}>
                {t('location')}
              </Typography>
            </Box>
          </Box>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <IconButton 
              size="small"
              sx={{ 
                color: 'white',
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                } 
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton 
              size="small"
              sx={{ 
                color: 'white',
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                } 
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProfileHeader; 