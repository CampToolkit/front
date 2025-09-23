import { type ComponentType, useEffect } from 'react';
import BaseInfo from '@/modules/camp-base-info/BaseInfo.tsx';
import Sportsmen from '@/modules/sportsmen/Sportsmen.tsx';
import Groups from '@/modules/groups/Groups';
import { useCampTabs } from '@/modules/camp/hooks/use-camp-tabs.hook.ts';
import PageTitle from '@/common/components/PageTitle.tsx';
import { Box, Tab, Tabs } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useCampContext } from '@/modules/camp/providers/camp-context.ts';
import { useCampApi } from '@/common/api/camp/hooks/use-camp.hook';

interface CampTab {
  name: string;
  path: string;
  component: ComponentType;
}

const TABS: CampTab[] = [
  {
    name: 'Основная информация',
    path: 'base-info',
    component: BaseInfo,
  },
  {
    name: 'Спортсмены',
    path: 'sportsmen',
    component: Sportsmen,
  },
  {
    name: 'Группы',
    path: 'groups',
    component: Groups,
  },
];

export default function Camp() {
  const { campId } = useParams();

  const { setCamp } = useCampContext();
  const { camp } = useCampApi(Number(campId));

  const { currentTabIndex, handleSwitchTabs } = useCampTabs();
  const CurrentComponent = TABS[currentTabIndex].component;

  useEffect(() => {
    setCamp(camp);
  }, [camp]);

  return (
    <div>
      <PageTitle
        title={`Спортивный лагерь ${camp ? camp.name.toUpperCase() : ''}`}
        showBackButton={true}
      />
      <Tabs value={currentTabIndex} onChange={handleSwitchTabs} sx={{ mb: 2 }}>
        {TABS.map((tab, index) => (
          <Tab key={tab.name} label={tab.name} value={index} />
        ))}
      </Tabs>
      <Box>
        <CurrentComponent />
      </Box>
    </div>
  );
}
