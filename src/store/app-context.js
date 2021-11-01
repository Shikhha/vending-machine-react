import React from 'react';

const AppContext = React.createContext({
    products:[],
    removedProducts: [],
    totalAmount : 0,
    addProduct : (product) => {},
    removeProduct : (id) => {},
    deposit:0,
    addDeposit : (dep) => {}

});

export default AppContext;