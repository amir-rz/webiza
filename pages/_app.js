import { GeistProvider, CssBaseline } from "@geist-ui/react";
import "../styles/globals.css";
import { createContext, useReducer } from "react";
import AppReducer from "@/contexts/App/AppReducer";

const initialState = {
  theme: "light",
};
export const AppContext = createContext(initialState);

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <GeistProvider themeType={state.theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </GeistProvider>
    </AppContext.Provider>
  );
}
export default MyApp;
