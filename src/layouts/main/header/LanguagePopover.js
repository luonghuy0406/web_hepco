import { useState } from 'react';
// @mui
import { Box, MenuItem, Stack, IconButton, Popover } from '@mui/material';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

const LANGS = {
  en: {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/ic_flag_en.svg',
  },
  vi: {
    value: 'vi',
    label: 'Tiếng Việt',
    icon: '/assets/icons/ic_flag_vi.svg',
  }
};

// ----------------------------------------------------------------------

export function LanguagePopover() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(null);
  
  const [language, setLanguage] = useState(i18n.language);
  const setCurrentLanguage = (language) => {
    localStorage.setItem('language', language);
  };
  const handleLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value)
    setCurrentLanguage(value)
  };

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 30,
          height: 30
        }}
      >
        <img src={LANGS[language].icon} alt={LANGS[language].label} width={30} height={30}/>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {Object.values(LANGS).map((option) => (
            <MenuItem 
              key={option.value} 
              selected={option.value === LANGS[language].value} 
              onClick={() => {
                handleClose()
                handleLanguageChange(option.value)
              }}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}