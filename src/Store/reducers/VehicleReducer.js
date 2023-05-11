import {
  GET_VEHICLES,
  IS_SIDEBAR_ACTIVE,
  CHOOSEN_ITEM,
} from "../actions/VehicleTypes";

const initialState = {
  vehicles: [],
  getPostById: {},
  showSideview: true,
  choosenVehicle: {},
};

export default function VehicleReducer(state = initialState, actions) {

  if (actions.type === IS_SIDEBAR_ACTIVE) {
    return {
      ...state,
      showSideview: actions.payload,
    };
  }
  if (actions.type === CHOOSEN_ITEM) {
    return {
      ...state,
      choosenVehicle: actions.payload,
    };
  }

  if (actions.type === GET_VEHICLES) {
    return {
      ...state,
      vehicles: actions.payload,
    };
  }
  return state;
}
