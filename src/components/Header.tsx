import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  ButtonGroup,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Timeline as TimelineIcon,
  Category as CategoryIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';
import { getTranslation, TranslationKeys } from '../i18n/translations';

interface HeaderProps {
  mode: 'light' | 'dark';
  language: string;
  viewMode: 'chronological' | 'categorized' | 'simplified';
  onToggleColorMode: () => void;
  onLanguageChange: (language: string) => void;
  onViewModeChange: (viewMode: 'chronological' | 'categorized' | 'simplified') => void;
}

const Header: React.FC<HeaderProps> = ({
  mode,
  language,
  viewMode,
  onToggleColorMode,
  onLanguageChange,
  onViewModeChange,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Translation function
  const t = (key: keyof TranslationKeys): string => getTranslation(language, key);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('portfolio')}
        </Typography>
        
        {/* Language Switcher */}
        <ButtonGroup 
          variant="outlined" 
          size="small" 
          sx={{ 
            mr: 2,
            '& .MuiButton-root': {
              color: 'inherit',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
              '&.Mui-disabled': {
                color: 'rgba(255, 255, 255, 0.3)',
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }
            }
          }}
        >
          <Button
            onClick={() => onLanguageChange('en')}
            sx={{ 
              backgroundColor: language === 'en' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
            }}
          >
            EN
          </Button>
          <Button
            onClick={() => onLanguageChange('te')}
            disabled
            sx={{ 
              backgroundColor: language === 'te' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
            }}
          >
            తె
          </Button>
        </ButtonGroup>
        
        {/* View Mode Buttons - Hidden on Mobile */}
        {!isMobile && (
          <ButtonGroup 
            variant="outlined" 
            size="small" 
            sx={{ 
              mr: 2,
              '& .MuiButton-root': {
                color: 'inherit',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }
              }
            }}
          >
            <Button
              onClick={() => onViewModeChange('chronological')}
              sx={{ 
                backgroundColor: viewMode === 'chronological' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
              }}
            >
              <TimelineIcon sx={{ mr: 1, fontSize: '1rem' }} />
              {t('chronological')}
            </Button>
            <Button
              onClick={() => onViewModeChange('categorized')}
              sx={{ 
                backgroundColor: viewMode === 'categorized' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
              }}
            >
              <CategoryIcon sx={{ mr: 1, fontSize: '1rem' }} />
              {t('categorized')}
            </Button>
            <Button
              onClick={() => onViewModeChange('simplified')}
              sx={{ 
                backgroundColor: viewMode === 'simplified' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
              }}
            >
              <DescriptionIcon sx={{ mr: 1, fontSize: '1rem' }} />
              {t('simplified')}
            </Button>
          </ButtonGroup>
        )}

        <IconButton 
          onClick={onToggleColorMode} 
          color="inherit"
          sx={{ 
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 