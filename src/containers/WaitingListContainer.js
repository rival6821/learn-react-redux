import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as watingActions from '../store/modules/wating';
import WaitingList from '../components/WaitingList';


class WaitingListContainer extends Component {
    //인풋 변경
    handleChange = e => {
        const { WatingActions } = this.props;
        WatingActions.changeInput(e.target.value);
    };
    handleSubmit = e =>{
        e.preventDefault();
        const {WatingActions,input} = this.props;
        WatingActions.create(input);
        WatingActions.changeInput('');
    }
    handleEnter = id => {
        const { WatingActions } = this.props;
        WatingActions.enter(id);
    }
    handleLeave = id => {
        const { WatingActions } = this.props;
        WatingActions.leave(id);
    }

    render() {
        const { input, list } = this.props;
        return (
            <WaitingList input={input}
                waitingList={list}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onEnter={this.handleEnter}
                onLeave={this.handleLeave}/>
        );
    }
}

//위에서 쓸 props를 만들어줌
const mapStateToProps = ({ waiting }) => ({
    input : waiting.input,
    list : waiting.list,
});

//위에서쓸 액션 함수를 만들어줌
const mapDispatchToProps = dispatch => ({
    WatingActions : bindActionCreators(watingActions, dispatch)
});

export default connect({
    mapStateToProps,
    mapDispatchToProps
})(WaitingListContainer);