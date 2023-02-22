import React, {Component} from 'react';
import {Navbar, NavbarBrand, Button} from 'reactstrap';
import * as Actions from './redux/actions';
import {connect} from 'react-redux';

class Header extends Component {
  onAddClick() {
  	this.props.changeScreen('Add');
  }

  onEditClick() {
    this.props.changeScreen('Edit');
  }

  onDeleteClick() {
    this.props.openDeleteModal();
  }

  render() {
    return (
      <Navbar>
        <NavbarBrand className="flex-grow-1">&#x1F4D3; Recipe Book</NavbarBrand>
        <Button color="danger" size="sm" className="me-2" onClick={() => this.onDeleteClick()}>Delete</Button>
        <Button color="secondary" size="sm" className="me-2" onClick={() => this.onEditClick()}>Edit</Button>
        <Button color="success" size="sm" onClick={() => this.onAddClick()}>Add</Button>
      </Navbar>
    );
  }
}

const mapDispatchToProps = {
  changeScreen: Actions.changeScreen,
  openDeleteModal: Actions.openDeleteModal
};

export default connect(null, mapDispatchToProps)(Header);
