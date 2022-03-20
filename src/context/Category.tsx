import React, { createContext, useState } from "react";
import { CategoryList, CategoryListContextType } from "../../types";
import Setting from "../constants/Setting";


//context
const CategoryListContext = createContext<CategoryListContextType>({} as CategoryListContextType);

const CategoryProvider: React.FC = ({ children }) => {
    const [categoryList, setCategoryList] = useState<CategoryList>(Setting.category);

    return(
        <CategoryListContext.Provider value={{categoryList, setCategoryList}}>{children}</CategoryListContext.Provider>
    )
};


export const useCategoryList = () => React.useContext(CategoryListContext);
export default CategoryProvider;
