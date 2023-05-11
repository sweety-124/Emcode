import { getVehicles } from "../../services/vehiclesService";
import {
  CHOOSEN_ITEM,
  GET_VEHICLES,
  IS_SIDEBAR_ACTIVE,
} from "./VehicleTypes";

export function getVehiclesAction() {
  return (dispatch, getState) => {
    getVehicles().then((response) => {
      return dispatch(confirmedGetVehiclesAction(response.data));
    });
  };
}
export function updateToggleSidebar(data) {
  return (dispatch, getState) => {
    return dispatch(updateToggleValue(data));
  };
}
export function selectedItemFromList(data) {
  return (dispatch, getState) => {
    return dispatch(choosenItem(data));
  };
}

export function confirmedGetVehiclesAction(vehicles) {
  return {
    type: GET_VEHICLES,
    payload: vehicles,
  };
}
export function updateToggleValue(value) {
  return {
    type: IS_SIDEBAR_ACTIVE,
    payload: value,
  };
}
export function choosenItem(value) {
  return {
    type: CHOOSEN_ITEM,
    payload: value,
  };
}
