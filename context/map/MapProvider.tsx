import { useReducer } from 'react';
import { MapContext, mapReducer } from './';

export interface mapState {
  isLoading: boolean;
}

const map_INITIAL_STATE: mapState = {
  isLoading: false,
};

interface Props {
  children: React.ReactNode;
}

export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, map_INITIAL_STATE);

  return (
    <MapContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
