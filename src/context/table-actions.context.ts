import {createContext, useContext} from "react";

interface TableActionsContextProps {
  onDelete?: (id: string) => Promise<void>;
  onEdit?: (id: string) => void;
}

export const TableActionsContext = createContext<TableActionsContextProps | null>(null);

export const useTableActionsContext = () => {
  const context = useContext(TableActionsContext);
  if (!context) {
    throw new Error('useTableActionsContext must be used within a TableActionsContext');
  }

  return context;
}
