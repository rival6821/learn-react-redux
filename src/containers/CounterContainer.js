import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';
import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
    handleIncrement = () => {
        this.props.increment();
    }
    handleDecrement = () => {
        this.props.decrement();
    }
    render() {
        const { color, number } = this.props;
        return (
          <Counter 
            color={color}
            value={number}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}/>
        );
    }
}

// props로 넣어 주는 스토어 상태 값
const mapStateToProps = ({ counter }) => ({
    color : counter.color,
    number : counter.number,
})

//props로 넣어 주는 액션 생성함수
const mapDispatchToProps = dispatch =>
  bindActionCreators({ increment, decrement }, dispatch);

//  컴포넌트에 리덕스 스토어를 연동해주는 connect함수
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);