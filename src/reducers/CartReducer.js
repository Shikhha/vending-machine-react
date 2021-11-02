import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_DEPOSIT, SET_CHANGE} from "../data/Constants"
import { findIndex } from "../helpers/ArrayCalculations";
export const cartReducer = (state, action) =>
{
    if(action.type == ADD_DEPOSIT)
    {
        return{
            ...state,
            deposit: action.deposit
        }
    }

    if(action.type == SET_CHANGE)
    {
        return{
            ...state,
            change: action.change
        }
    }
    if(action.type == ADD_PRODUCT)
    {
        let updatedProducts = [];
        let updatedTotalAmount = 0;
        let removedProducts = [];
        const existingProductIndex = findIndex(state.products, action.product.id);
        if(existingProductIndex > -1)
        {
            updatedProducts = state.products
            const existingProduct = updatedProducts[existingProductIndex];
            updatedTotalAmount = state.totalAmount - existingProduct.price*(existingProduct.chosen-1) + action.product.price*action.product.chosen
            updatedProducts[existingProductIndex] = action.product;
            removedProducts  = []
           
        }

        else
        { 
            updatedProducts = state.products.concat(action.product);
            updatedTotalAmount = state.totalAmount + action.product.price*action.product.chosen;
            removedProducts =  []
        }
        
        return{
            deposit: state.deposit,
            products: updatedProducts,
            removedProducts : [],
            totalAmount : updatedTotalAmount
        }
    }

    if(action.type == REMOVE_PRODUCT)
    {
        let updatedProducts = [];
        let updatedTotalAmount = 0;
        let removedProducts = [];
        const existingProductIndex = findIndex(state.products, action.id);
        if(existingProductIndex > -1)
        {
            updatedProducts = [...state.products]
            const exisitingProduct = state.products[existingProductIndex]
            updatedProducts = state.products.filter(product => product.id != action.id);
            updatedTotalAmount = state.totalAmount - exisitingProduct.price*exisitingProduct.chosen;
            removedProducts.push(exisitingProduct);
        }

        return{
            deposit: state.deposit,
            products: updatedProducts,
            totalAmount : updatedTotalAmount,
            removedProducts : removedProducts
        }
    }
    return{
        deposit: state.deposit,
        products: [] ,
        totalAmount : 0 ,
        removedProducts : state.removedProducts
    }
}