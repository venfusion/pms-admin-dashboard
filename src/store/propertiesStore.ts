import { create } from 'zustand';

import { Property } from '#/modules/properties/types/properties.type';

export interface PropertiesState {
  properties: Property[];
  setProperties: (properties: Property[]) => void;
}

export const usePropertiesStore = create<PropertiesState>((set) => ({
  properties: [],
  setProperties: (properties) => set({ properties }),
}));
