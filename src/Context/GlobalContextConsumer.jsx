import { useContext } from "react";
import { GlobalContext } from "./GlobalContextProvider";

export default function useGlobalContext() {
	return useContext(GlobalContext);
}
