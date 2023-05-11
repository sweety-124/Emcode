import { createSelector } from 'reselect';

export const getPostById = (state, postId) =>
    state.posts.posts.find((post) => post.id === postId);

export const selectPost = () => createSelector([getPostById], (post) => post);
 export const sideBarView = (state)=>{
return state.vehicles.showSideview};
export const vehicleSelect = (state)=> { 
return state.vehicles}
export const choosenVehicleFromLists = (state)=> { 
return state.vehicles.choosenVehicle}

