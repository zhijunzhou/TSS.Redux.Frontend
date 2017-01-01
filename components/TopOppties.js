import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import BoxLink from './BoxLink'

class TopOppties extends Component {

    render() {
        const {menus} = this.props
        
        return (                            
            <Nav bsStyle="pills">
                <BoxLink data={menus.cs} />  
                <BoxLink data={menus.gsa} />  
                <BoxLink data={menus.cs} />  
                <BoxLink data={menus.cs} />  
                <BoxLink data={menus.cs} />  
                <BoxLink data={menus.cs} /> 
                <BoxLink data={menus.cs} />  
                <BoxLink data={menus.cs} />       
            </Nav>
        )
    }
}

export default TopOppties