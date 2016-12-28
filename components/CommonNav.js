import React, { Component } from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import Logo from '../svgs/logo'

class CommonNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        {
                            this.props.value === ''
                            ? 'The Solution Source'
                            : <Link to="/">The Solution Source</Link>
                        }
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>                        
                        <NavDropdown eventKey={3} title="Help & Reference" id="helpRef">
                            <MenuItem eventKey={2.1}>FAQ</MenuItem>
                            <MenuItem eventKey={2.2}>Training</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.3}>Contact Service Desk</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.4}>Opportunity Activity Report</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Opportunities" id="oppties">
                            <MenuItem eventKey={3.1}>New opportunity</MenuItem>
                            <MenuItem eventKey={3.2}>My opportunities</MenuItem>
                            <MenuItem eventKey={3.3}>All opportunities</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            <Logo />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>            
            </Navbar>
        )
    }
}

export default CommonNav