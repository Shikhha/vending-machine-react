import { ADD_PRODUCT, REMOVE_PRODUCT } from "../Data/Constants"
export const cartReducer = (state, action) =>
{
    if(action.type == ADD_PRODUCT)
    {
        const updatedProducts = state.products.concat(action.product);
        const updatedTotalAmount = state.totalAmount + action.product.price*action.product.chosen;
        console.log("Inside reducer : ", updatedProducts);
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