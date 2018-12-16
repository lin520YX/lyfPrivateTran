import * as React from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/counter';
import { Store } from '../types';
interface IProps{
   number: number;
   increment:any;
   decrement:any;
   incrementDelay:any;
}
 class Counter extends React.Component<IProps> {
    render() {
        let {number,increment,decrement, incrementDelay}= this.props;
        return (
            <div>
                <p>{number}</p>
                <button onClick={increment}>+</button>
                <button onClick={incrementDelay}>Dlay+</button>
                <button onClick={decrement}>-</button>
            </div>
        )
    }
}
let mapStateToProps=function (state:Store):Store {
    return state;
}
export default connect(mapStateToProps,actions)(Counter)