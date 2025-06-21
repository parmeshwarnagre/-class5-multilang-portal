import React from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <FormControl size="small" sx={{ minWidth: 120, ml: 2 }}>
      <InputLabel>{t('selectLanguage')}</InputLabel>
      <Select
        value={i18n.language}
        label={t('selectLanguage')}
        onChange={handleChange}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="hi">हिंदी</MenuItem>
        <MenuItem value="mr">मराठी</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
