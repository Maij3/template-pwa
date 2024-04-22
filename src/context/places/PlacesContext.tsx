import { createContext } from "react";
import { PlacesContextProps } from "./types";

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);