import React, { Component, PropTypes } from 'react'
import { NavDropdown, MenuItem } from 'react-bootstrap'

class BoxLink extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    renderMenuItem(item) {
        if(item.hasOwnProperty('title')) {
            return <MenuItem eventKey={1.1} href={item.url} key={item.url}>{item.title}</MenuItem>
        }
        return <MenuItem divider key={item} />
    }

    render() {
        const {data} = this.props
        return (
            <NavDropdown eventKey={1} title={data.title} id={data.id} noCaret>
                {
                    data.subMenus.map(item => this.renderMenuItem(item))
                }                
            </NavDropdown>
        )
    }
}

export default BoxLink