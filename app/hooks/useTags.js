import { useState, useEffect } from "react";
import { getProcessedTags } from "./utils";

const useTags = (productsList = []) => {
    const [processedTagsList, setProcessedTagsList] = useState([]);

    useEffect(() => {
        if (productsList.length > 0) {
            setProcessedTagsList(getProcessedTags(productsList))
        }
    }, [productsList])


    return {
        processedTagsList
    }
}

export default useTags;