import React, {Component} from 'react'
import { Link } from 'react-router'

class TopOppties extends Component {
    
    render() {
        return (
            <ul>
                <li><Link to="/allOppty">All Opportunities</Link></li>
                <li><Link to="/myOppty">My Opportunities</Link></li>                    
            </ul>
        )
    }
}

export default TopOppties