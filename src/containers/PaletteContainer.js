import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pallette from '../components/Palette';
import { changeColor } from '../store/modules/counter';

class PaletteContainer extends Component {
    handelSelect = color => {
        const { changeColor } = this.props;
        console.log(color);
        changeColor(color);
    }
    render() {
        const { color } = this.props;
        return <Pallette onSelect={this.handelSelect} selected = {color}/>;
    }
}

// props로 넣어 주는 스토어 상태 값
const mapStateToProps = state => ({
    color : state.counter.color,
})

//props로 넣어 주는 액션 생성함수
const mapDispatchToProps = dispatch => ({
    changeColor : color => dispatch(changeColor(color)),
});

//  컴포넌트에 리덕스 스토어를 연동해주는 connect함수
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaletteContainer);