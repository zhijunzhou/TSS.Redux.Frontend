import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

class CSHome extends Component {

    static propTypes = {
        opptyId: PropTypes.string.isRequired,
        opptyName: PropTypes.string.isRequired
    }

    renderSectionItem(opptyId, opptyName, sid, sectionName) {
        return (<li><Link to={`/cs/${opptyId}/${sid}?opptyName=${opptyName}`}>{sectionName}</Link></li>)
    }
    
    render() {
        const {opptyId, opptyName} = this.props

        return (
            <div>
                <p>
                    <b>{opptyId}{' | '}{opptyName}</b>
                </p>
                <ul>
                    {this.renderSectionItem(opptyId, opptyName, '0201', 'Opportunity Description')}
                    {this.renderSectionItem(opptyId, opptyName, '0202', 'Pursuit Team Contact')}
                    {this.renderSectionItem(opptyId, opptyName, '0203', 'Key Dates')}
                    {this.renderSectionItem(opptyId, opptyName, '0204', 'Client Pursuit Context')}
                    {this.renderSectionItem(opptyId, opptyName, '0205', 'Scope')}
                </ul>
            </div>
        )
    }

}

const maptStateToProps = (state, ownProps) => {
    const opptyId = ownProps.params.opptyId
    const opptyName = ownProps.location.query.opptyName

    return {
        opptyId,
        opptyName
    }
}

export default connect(maptStateToProps)(CSHome)