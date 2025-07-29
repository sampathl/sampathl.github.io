import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { createAppTheme } from './theme';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import MobileContactDropdown from './components/MobileContactDropdown';
import ContentSections from './components/ContentSections';

type ViewMode = 'chronological' | 'categorized' | 'simplified';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const [expanded, setExpanded] = useState<string | false>(false);
  const [viewMode, setViewMode] = useState<ViewMode>('chronological');
  const [language, setLanguage] = useState<string>('en');
  const [contactExpanded, setContactExpanded] = useState<boolean>(false);

  const theme = createAppTheme(mode);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Auto-switch to simplified view on mobile
  useEffect(() => {
    if (isMobile) {
      setViewMode('simplified');
    }
  }, [isMobile]);

  const handleAccordionChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const toggleContactInfo = () => {
    setContactExpanded(!contactExpanded);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const handleViewModeChange = (newViewMode: ViewMode) => {
    setViewMode(newViewMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header
          mode={mode}
          language={language}
          viewMode={viewMode}
          onToggleColorMode={toggleColorMode}
          onLanguageChange={handleLanguageChange}
          onViewModeChange={handleViewModeChange}
        />
        
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
          <ProfileHeader language={language} />
          
          {/* Mobile Contact Info Dropdown */}
          {isMobile && (
            <MobileContactDropdown
              language={language}
              expanded={contactExpanded}
              onToggle={toggleContactInfo}
            />
          )}

          {/* Content Section */}
          <ContentSections
            language={language}
            viewMode={viewMode}
            expanded={expanded}
            onAccordionChange={handleAccordionChange}
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App; 