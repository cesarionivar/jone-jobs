import { createContext } from 'react';
import { mapState } from '.';

interface ContextProps extends mapState {}

export const MapContext = createContext({} as ContextProps);
