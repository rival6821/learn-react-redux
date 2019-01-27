import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as waitingActions from '../store/modules/waiting';
import WaitingList from '../components/WaitingList';


class WaitingListContainer extends Component {
    //인풋 변경
    handleChange = e => {
        const { WaitingActions } = this.props;
        WaitingActions.changeInput(e.target.value);
    };
    handleSubmit = e =>{
        e.preventDefault();
        const {WaitingActions,input} = this.props;
        WaitingActions.create(input);
        WaitingActions.changeInput('');
    }
    handleEnter = id => {
        const { WaitingActions } = this.props;
        WaitingActions.enter(id);
    }
    handleLeave = id => {
        const { WaitingActions } = this.props;
        WaitingActions.leave(id);
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
    WaitingActions : bindActionCreators(waitingActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaitingListContainer);