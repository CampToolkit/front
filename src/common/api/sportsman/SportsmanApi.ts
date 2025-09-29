import type { RelatedCampEntityApi } from '@/common/api/lib/types/BaseApi.type.ts';
import type { Sportsman } from '@/common/api/sportsman/SportsmanApi.type.ts';
import type {
  AddSportsmenToCampDto,
  CreateSportsmanBulkDto,
  CreateSportsmanDto,
  RemoveSportsmanFromCampDto,
  UpdateSportsmanDto,
} from '@/common/api/sportsman/SportsmanApi.dto.ts';
import { axiosConfig } from '@/common/api/axios-config.ts';
import { customDelete } from '@/common/api/lib/utils/custom-delete.ts';
import type { IncludesDto } from '@/common/api/lib/types/IncludesDto.ts';

export const SportsmanApi: RelatedCampEntityApi<Sportsman, CreateSportsmanDto> = {
  getAll: async () => {
    const { data } = await axiosConfig.get<Sportsman[]>('sportsman');
    return data;
  },

  getOne: async (id: number) => {
    const { data } = await axiosConfig.get<Sportsman>(`/sportsman/${id}`);
    return data;
  },

  create: async (dto: CreateSportsmanDto) => {
    const { data } = await axiosConfig.post<Sportsman>('/sportsman', dto);
    return data;
  },

  createMany: async (dto: CreateSportsmanBulkDto) => {
    console.log('createMany', dto);
    const { data } = await axiosConfig.post<Sportsman[]>(`/sportsman/bulk/`, dto);
    return data;
  },

  update: async (id: number, dto: UpdateSportsmanDto) => {
    const { data } = await axiosConfig.patch<Sportsman>(`/sportsman/${id}`, dto);
    return data;
  },

  getByCamp: async (campId: number, params?: IncludesDto) => {
    const { data } = await axiosConfig.get<Sportsman[]>(`/camp/${campId}/sportsman`, {
      params,
    });
    return data;
  },

  addManyToCamp: async (campId: number, dto: AddSportsmenToCampDto) => {
    await axiosConfig.post<Sportsman>(`/camp/${campId}/sportsman`, dto);
  },

  removeManyFromCamp: async (id: number, dto: RemoveSportsmanFromCampDto) => {
    return await customDelete({ path: `/api/camp/${id}/sportsman`, dto });
  },

  delete: async (id: number) => {
    await axiosConfig.delete(`/sportsman/${id}`);
  },
};
