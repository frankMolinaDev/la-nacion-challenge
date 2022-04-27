import { createContext, useContext, useMemo } from "react";
import useProducts from "../hooks/useProducts";
import useTags from "../hooks/useTags";

const AppContext = createContext();

export function AppProvider(props) {
    const { filteredProductsList } = useProducts();
    const { processedTagsList } = useTags(filteredProductsList);

    const value = useMemo(() => {
        return { filteredProductsList, processedTagsList };
    }, [filteredProductsList, processedTagsList])

    return <AppContext.Provider value={value} {...props} />
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('Error al cargar context')
    }
    return context;
}
