import React from 'react';

const AppContext = React.createContext({
    products:[],
    removedProducts: [],
    totalAmount : 0,
    addProduct : (product) => {},
    removeProduct : (id) => {},
    deposit:0,
    change: 0,
    addDeposit : (dep) => {},
    setChange : (change) => {}

});

export default AppContext;