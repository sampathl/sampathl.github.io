import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Interests as InterestsIcon,
  Work as WorkIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
import { getTranslation, TranslationKeys } from '../i18n/translations';

interface Section {
  id: string;
  title: keyof TranslationKeys;
  icon: React.ReactNode;
  content: keyof TranslationKeys;
  category: 'summary' | 'experience' | 'education' | 'skills' | 'projects';
  chronologicalOrder: number;
}

interface ContentSectionsProps {
  language: string;
  viewMode: 'chronological' | 'categorized' | 'simplified';
  expanded: string | false;
  onAccordionChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

const createSections = (t: (key: keyof TranslationKeys) => string): Section[] => [
  {
    id: 'summary',
    title: 'summary',
    icon: <InterestsIcon />,
    content: 'summaryContent',
    category: 'summary',
    chronologicalOrder: 1,
  },
  {
    id: 'skills',
    title: 'skills',
    icon: <WorkIcon />,
    content: 'skillsContent',
    category: 'skills',
    chronologicalOrder: 2,
  },
  {
    id: 'experience',
    title: 'experience',
    icon: <WorkIcon />,
    content: 'experienceContent',
    category: 'experience',
    chronologicalOrder: 3,
  },
  {
    id: 'education',
    title: 'education',
    icon: <SchoolIcon />,
    content: 'educationContent',
    category: 'education',
    chronologicalOrder: 4,
  },
  {
    id: 'projects',
    title: 'projects',
    icon: <WorkIcon />,
    content: 'projectsContent',
    category: 'projects',
    chronologicalOrder: 5,
  },
];

const ContentSections: React.FC<ContentSectionsProps> = ({
  language,
  viewMode,
  expanded,
  onAccordionChange,
}) => {
  // Translation function
  const t = (key: keyof TranslationKeys): string => getTranslation(language, key);

  // Create sections with translations
  const sections = createSections(t);

  const getSortedSections = () => {
    switch (viewMode) {
      case 'chronological':
        return [...sections].sort((a, b) => a.chronologicalOrder - b.chronologicalOrder);
      case 'categorized':
        return [...sections].sort((a, b) => a.category.localeCompare(b.category));
      case 'simplified':
        return sections;
      default:
        return sections;
    }
  };

  const renderSimplifiedView = () => (
    <Paper 
      elevation={3} 
      sx={{ 
        p: { xs: 2, sm: 4 }, 
        borderRadius: '24px',
        bgcolor: 'background.paper',
        mb: 2,
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: 'Work Sans, sans-serif', mb: 3 }}>
        {t('name')} - {t('title')}
      </Typography>
      
      <Typography variant="h6" sx={{ fontFamily: 'Work Sans, sans-serif', mb: 2 }}>
        {t('contactInformation')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 1 }}>
        {t('contactEmail')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 1 }}>
        {t('contactPhone')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 3 }}>
        {t('contactLocation')}
      </Typography>

      <Typography variant="h6" sx={{ fontFamily: 'Work Sans, sans-serif', mb: 2 }}>
        {t('summary')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 3 }}>
        {t('summaryContent')}
      </Typography>

      <Typography variant="h6" sx={{ fontFamily: 'Work Sans, sans-serif', mb: 2 }}>
        {t('skills')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 3 }}>
        {t('skillsContent')}
      </Typography>

      <Typography variant="h6" sx={{ fontFamily: 'Work Sans, sans-serif', mb: 2 }}>
        {t('experience')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 1 }}>
        {t('experienceSenior')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 1 }}>
        {t('experienceFullStack')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 3 }}>
        {t('experienceJunior')}
      </Typography>

      <Typography variant="h6" sx={{ fontFamily: 'Work Sans, sans-serif', mb: 2 }}>
        {t('education')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 1 }}>
        {t('educationMasters')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 3 }}>
        {t('educationBachelors')}
      </Typography>

      <Typography variant="h6" sx={{ fontFamily: 'Work Sans, sans-serif', mb: 2 }}>
        {t('projects')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 1 }}>
        {t('projectEcommerce')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', mb: 1 }}>
        {t('projectPortfolio')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif' }}>
        {t('projectTaskManagement')}
      </Typography>
    </Paper>
  );

  return (
    <>
      {viewMode === 'simplified' ? (
        renderSimplifiedView()
      ) : (
        /* Accordion Sections */
        getSortedSections().map((section) => (
          <Accordion
            key={section.id}
            expanded={expanded === section.id}
            onChange={onAccordionChange(section.id)}
            sx={{ 
              mb: 2,
              '& .MuiAccordionSummary-root': {
                minHeight: '64px',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${section.id}-content`}
              id={`${section.id}-header`}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {section.icon}
                <Typography variant="h6" sx={{ fontFamily: 'Work Sans, sans-serif' }}>
                  {t(section.title)}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', whiteSpace: 'pre-line' }}>
                {t(section.content)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </>
  );
};

export default ContentSections; 