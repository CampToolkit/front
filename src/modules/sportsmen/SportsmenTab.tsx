import { useSportsmanApi } from '@/common/api/sportsman/hooks/use-sportsman-api.hook.ts';
import { useCampContext } from '@/modules/camp/providers/camp-context.ts';
import SportsmenListWithSignButton from '@/common/components/sportsmen/SportsmenListWithSignButton.tsx';

export default function SportsmenTab() {
  const { camp } = useCampContext();
  const { state: sportsmen } = useSportsmanApi(camp ? camp.id : undefined);

  const onChange = (personId: number) => {
    console.log(personId);
  };

  return <SportsmenListWithSignButton sportsmen={sportsmen} onClick={onChange} />;
}
