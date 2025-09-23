import GroupsTable from '@/modules/groups/GroupsTable.tsx';
import { useCampContext } from '@/modules/camp/providers/camp-context.ts';
import { useGroupApi } from '@/common/api/group/hooks/use-group-api.hook.ts';

export default function Groups() {
  const { camp } = useCampContext();
  const { state: groups } = useGroupApi(camp ? camp.id : undefined);
  return <GroupsTable list={groups} />;
}
