import React, { Component } from 'react';
import ProductList from './ProductList';

class App extends Component {
    render() {
        return (
            <div className="container jumbotron">
                <main>
                    <ProductList/>
                </main>
            </div>
        );
    }
}

export default App;