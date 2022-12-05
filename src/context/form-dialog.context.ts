import {createContext, useContext} from "react";
import {FormDialogProps} from "@/components";

export const FormDialogContext = createContext({} as Partial< FormDialogProps>);

export const useFormDialogContext = () => {
    return useContext(FormDialogContext);
}
