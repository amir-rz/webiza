import * as appActions from "@/contexts/App/AppActions";

const AppReducer = (state, { type, payload }) => {
  switch (type) {
    case appActions.SET_THEME:
      return { ...state, theme: payload.theme };

    default:
      return state;
  }
};

export default AppReducer;
