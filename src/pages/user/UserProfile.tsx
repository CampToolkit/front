import { useState } from 'react';
import { useFormik } from 'formik';
import { Box, Button, Typography, Select, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PageTitle from '@/shared/components/PageTitle.tsx';
import BaseSlider from '@/shared/components/swiper-slider/BaseSlider.tsx';
import SportsmanSlideCard, {
  type SportsmanSlideCardPropsType,
} from '@/pages/user/SportsmanSlideCard.tsx';
import ActionIconButton from '@/shared/components/buttons/ActionIconButton.tsx';

// note temporary
const watchingSportsmen = [
  { keyId: 1, spyingPersonId: 1, name: 'name1', group: 'group1' },
  { keyId: 2, spyingPersonId: 2, name: 'name2', group: 'group2' },
  { keyId: 3, spyingPersonId: 3, name: 'name3', group: 'group3' },
];

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
        <Typography variant="h6" sx={{ mb: 1 }}>
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
          mb: 3,
          p: 2,
          pt: 5,
          backgroundColor: 'whitesmoke',
          borderRadius: 1,
        }}
      >
        <ActionIconButton callback={() => setIsDisabledForm(false)} icon={<EditIcon />} />

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

      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Наблюдаемые спортсмены
        </Typography>
        <BaseSlider<SportsmanSlideCardPropsType>
          items={watchingSportsmen}
          renderItem={(item: SportsmanSlideCardPropsType) => <SportsmanSlideCard {...item} />}
        />
      </Box>
    </div>
  );
}
