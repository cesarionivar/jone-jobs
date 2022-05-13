import { mapState } from './';

type mapActionType = { type: '[map] - load-map' };

export const mapReducer = (
  state: mapState,
  action: mapActionType
): mapState => {
  switch (action.type) {
    case '[map] - load-map':
      return {
        ...state,
      };

    default:
      return state;
  }
};
