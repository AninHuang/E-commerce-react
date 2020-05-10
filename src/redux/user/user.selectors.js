import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser], // an array of the input selectors
  user => user.currentUser
);
