import React from "react";
import {Navbar,Nav,NavItem,NavDropdown, MenuItem} from "react-bootstrap";

function Main(){
  const styles = {
    navTitle: {
      borderRadius:0,
      fontSize:"30px"
    },
    navBar: {
      fontSize:"20px"
    }
  }
  return (
    <Navbar fixedTop style={styles.navBar} inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand style={styles.navTitle}>
        Resist Rifle Co.
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={3} title="Start" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Upper Receivers</MenuItem>
          <MenuItem eventKey={3.2}>Lower Receivers</MenuItem>
          <MenuItem eventKey={3.3}>Rail Systems</MenuItem>
          <MenuItem eventKey={3.4}>Buffer Systems</MenuItem>
          <MenuItem eventKey={3.5}>Barrels</MenuItem>
          <MenuItem eventKey={3.6}>Optics</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Complete Rifles</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Contact</NavItem>
        <NavItem eventKey={2} href="#">Cart (empty)</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Main;
