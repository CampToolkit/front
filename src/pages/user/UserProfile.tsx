import { useState } from 'react';
import { useFormik } from 'formik';
import { Box, Button, Typography, Select, MenuItem, IconButton } from '@mui/material';
import PageTitle from '@/shared/components/PageTitle.tsx';
import EditIcon from '@mui/icons-material/Edit';

type formType = {
  role: string;
};

const lastName = 'Last Name';
const firstName = 'First Name';
const formInitialValues: formType = {
  role: 'sportsman',
};

export default function UserProfile() {
  const [isDisabledForm, setIsDisabledForm] = useState(true);

  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: () => {
      setIsDisabledForm(true);
      console.log('form submitted');
      formik.setSubmitting(false);
    },
  });

  return (
    <div>
      <PageTitle title="Профиль" showBackButton={true} />
      <Box>
        <Typography variant="body1">
          {lastName}
          {firstName}
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 400,
          mt: 1,
          p: 1,
          pt: 5,
          backgroundColor: 'whitesmoke',
          borderRadius: 1,
        }}
      >
        <IconButton
          onClick={() => setIsDisabledForm(false)}
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            alignItems: 'right',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          <EditIcon />
        </IconButton>

        <Box display="flex" alignItems="center" gap={2} mb={3}>
          <Typography variant="body1">Роль</Typography>
          <Select
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            sx={{ flexGrow: 2 }}
            disabled={isDisabledForm}
          >
            <MenuItem value="sportsman">Спортсмен</MenuItem>
            <MenuItem value="independent">Самостоятельный спортсмен</MenuItem>
            <MenuItem value="parent">Родитель</MenuItem>
          </Select>
        </Box>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          disabled={formik.isSubmitting}
        >
          Сохранить
        </Button>
      </Box>
    </div>
  );
}
