import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Property } from '#/modules/properties/types/properties.type';

export interface PropertiesState {
  properties: Property[];
  setProperties: (properties: Property[]) => void;
}

export const usePropertiesStore = create<PropertiesState>()(
  persist(
    (set) => ({
      properties: [],
      setProperties: (properties) => set({ properties }),
    }),
    { name: 'properties-store' },
  ),
);
