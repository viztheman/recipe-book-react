import React, {Component} from 'react';
import AddEditForm from './AddEditForm';
import {connect} from 'react-redux';
import * as Actions from './redux/actions';

class Edit extends Component {
  onCancelClick() {
    this.props.changeScreen('Recipe');
  }

  render() {
	const {current} = this.props;

    return (
      <div className="flex-grow-1 flex-column ms-4">
        <h1>Edit Recipe</h1>
        <AddEditForm onCancelClick={() => this.onCancelClick()} current={current} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  current: state.current
});

const mapDispatchToProps = {
  changeScreen: Actions.changeScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
