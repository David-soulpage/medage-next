import { createContext, useReducer, useContext } from "react";
// uuid
import { v4 as uuidV4 } from "uuid";

export const globalContext = createContext<any>(null);

const initialState = {
  // toast alerts
  toastAlert: [],
  userDetails: {},
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "USER":
      return { ...state, userDetails: action.payload };
    case "ADD_TOAST_ALERT":
      action.payload["id"] = uuidV4();
      return {
        ...state,
        toastAlert: [...state.toastAlert, action.payload],
      };
    case "REMOVE_TOAST_ALERT":
      return {
        ...state,
        toastAlert: state.toastAlert.filter((item: any, i: number) => item.id != action.payload.id),
      };
    default:
      return state;
  }
};

export const GlobalContextProvider = (props: any) => {
  const [globalState, globalDispatch] = useReducer(reducer, initialState);

  return (
    <globalContext.Provider value={{ globalState, globalDispatch }}>
      {props.children}
    </globalContext.Provider>
  );
};

export const useAppContext = (): any => {
  const contextValue = useContext(globalContext);
  return contextValue;
};
