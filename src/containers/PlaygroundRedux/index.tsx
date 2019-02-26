import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from './actions';
import { IPGR } from './types';

import { Button, InputNumber, Input } from 'antd';
import './style';

function mapStateToProps(state) {
  return {
    ...state.PlaygroundRedux
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...Actions
    }, dispatch);
}

class PlaygroundRedux extends PureComponent<IPGR> {

  onCounterInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { assignCounter } = this.props;
    assignCounter(Number(e.target.value));
  }

  render() {

    const { counter, increaseCounter, decreaseCounter } = this.props;

    return (
      <div className={'container-flex'}>
        <Button
          type="primary"
          onClick={decreaseCounter}
        >-</Button>
        <Input
          style={{textAlign: 'center'}}
          size='large'
          type='number'
          onChange={this.onCounterInputChanged}
          value={counter}/>
        <Button
          type="primary"
          onClick={increaseCounter}
        >+</Button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaygroundRedux);