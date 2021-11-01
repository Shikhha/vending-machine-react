import { ADD_PRODUCT, REMOVE_PRODUCT } from "../Data/Constants"
import { findIndex } from "../helpers/arrayCalculations";
export const cartReducer = (state, action) =>
{
    if(action.type == ADD_PRODUCT)
    {
        let updatedProducts = [];
        const existingProductIndex = findIndex(state.products, action.product.id);
        if(existingProductIndex > -1    )
        {
            console.log("inside");
            updatedProducts = [...state.products]
            updatedProducts[existingProductIndex] = action.product
        }
        else{updatedProducts = state.products.concat(action.product);}
        const updatedTotalAmount = state.totalAmount + action.product.price*action.product.chosen;
        
        return{
            products: updatedProducts,
            totalAmount : updatedTotalAmount
        }
    }
    return{
        products: [] ,
        totalAmount : 0 
    }
}