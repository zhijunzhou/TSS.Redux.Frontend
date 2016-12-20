import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'

class TopOppties extends Component {

    static propTypes = {
        recents: PropTypes.object.isRequired,
        renderItem: PropTypes.func.isRequired
    }

    render() {
        const {recents, renderItem} = this.props
        
        return (
            <ul>
                <li><Link to="/allOppty">All Opportunities</Link></li>
                <li><Link to="/myOppty">My Opportunities</Link></li>
                { 
                    Object.keys(recents).map(opptyId => {
                        return renderItem(recents[opptyId])
                    })
                }             
            </ul>
        )
    }
}

export default TopOppties