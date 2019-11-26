import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import s from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    publication: this.props.items[0],
    total: this.props.items.length,
    currentValue: 1,
    disabledPrev: true,
    disabledNext: false,
  };

  handlePrevPub = () => {
    this.setState(prevState => ({
      publication: this.props.items[prevState.currentValue - 2],
      currentValue: prevState.currentValue - 1,
      disabledPrev: prevState.currentValue === 2 && !prevState.disabledPrev,
      disabledNext:
        prevState.currentValue === this.props.items.length &&
        !prevState.disabledNext,
    }));
  };

  handleNextPub = () => {
    this.setState(prevState => ({
      publication: this.props.items[prevState.currentValue],
      currentValue: prevState.currentValue + 1,
      disabledPrev: prevState.currentValue === 1 && !prevState.disabledPrev,
      disabledNext:
        prevState.currentValue === this.props.items.length - 1 &&
        !prevState.disabledNext,
    }));
  };

  render() {
    const {
      publication,
      total,
      currentValue,
      disabledPrev,
      disabledNext,
    } = this.state;
    return (
      <div className={s.containerReader}>
        <Controls
          disabledPrev={disabledPrev}
          disabledNext={disabledNext}
          handlePrevPub={this.handlePrevPub}
          handleNextPub={this.handleNextPub}
        />
        <Counter currentValue={currentValue} total={total} />
        <Publication currentValue={currentValue} publication={publication} />
      </div>
    );
  }
}
