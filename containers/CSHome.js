import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class CSHome extends Component {

    static propTypes = {
        opptyId: PropTypes.string.isRequired,
        opptyName: PropTypes.string.isRequired
    }

    renderSectionItem(sid, sectionName) {
        const {opptyId, opptyName} = this.props
        
        return (<li><Link to={`/loader/${opptyId}/${sid}?opptyName=${opptyName}`}>{sectionName}</Link></li>)
    }
    
    render() {
        const {opptyId, opptyName} = this.props

        return (
            <div>
                <p>
                    <b>{opptyId}{' | '}{opptyName}</b>
                </p>
                <ul>
                    {this.renderSectionItem('0201', 'Opportunity Description')}
                    {this.renderSectionItem('0202', 'Pursuit Team Contact')}
                    {this.renderSectionItem('0203', 'Key Dates')}
                    {this.renderSectionItem('0204', 'Client Pursuit Context')}
                    {this.renderSectionItem('0205', 'Scope')}
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