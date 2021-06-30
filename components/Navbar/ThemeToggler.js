import React, { useContext, useEffect } from "react";
import { Moon, Sun } from "@geist-ui/react-icons";
import { AppContext } from "pages/_app";
import * as appActions from "@/contexts/App/AppActions";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { state, dispatch } = useContext(AppContext);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    localStorage.setItem("theme", state.theme === "dark" ? "light" : "dark");
    dispatch({
      type: appActions.SET_THEME,
      payload: {
        theme: state.theme === "dark" ? "light" : "dark",
      },
    });
    setTheme(state.theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mx-2 h-10">
      {state.theme == "dark" ? (
        <div className="cursor-pointer z-50 p-2" onClick={toggleTheme}>
          <Sun />
        </div>
      ) : (
        <div className="cursor-pointer z-50 p-2" onClick={toggleTheme}>
          <Moon />
        </div>
      )}
    </div>
  );
};

export default ThemeToggler;
