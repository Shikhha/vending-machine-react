import React from 'react';

const AppContext = React.createContext({
    products:[],
    totalAmount : 0,
    addProduct : (product) => {},
    removeProduct : (id) => {}

});

export default AppContext;