import { createSelector } from "reselect";


export const productsSelector = (state) => state.productReducer.products;
export const categoryFilter = (state) => state.productReducer.filters.category;
export const searchFilter = (state) => state.productReducer.filters.searchFilter;

export const productRemaining = createSelector(productsSelector,categoryFilter,searchFilter,
    (products, category, searchText) => (products && products.filter((product) => 
    {
        if(category === null || category.title === 'ALL')
        {
            return (product.title.toLowerCase() 
            + product.src 
            + product.id 
            + product.category
            + product.dollar);
        }
        else
        {
            return (product.title.toLowerCase() 
            + product.src
            + product.id
            + product.category
            + product.dollar)
            && (product.category === category.title);
        }
    }
    )));