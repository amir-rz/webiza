import { useEffect } from "react";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import "../styles/globals.css";
import { createContext, useReducer } from "react";
import AppReducer from "@/contexts/App/AppReducer";
import * as appActions from "@/contexts/App/AppActions";
import { ThemeProvider } from "next-themes";

const initialState = {
  theme: "light",
};
export const AppContext = createContext(initialState);

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Get and set theme depends on last view
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    dispatch({
      type: appActions.SET_THEME,
      payload: {
        theme,
      },
    });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <ThemeProvider attribute="class">
        <GeistProvider themeType={state.theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </GeistProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
export default MyApp;
