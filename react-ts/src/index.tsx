import * as React from 'react';
import * as ReactDom from 'react-dom';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './store'
ReactDom.render(
    <Provider store ={store}>
        <Counter />
    </Provider>
    , document.getElementById('root'));