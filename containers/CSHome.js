import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Nav } from 'react-bootstrap'
import BoxLink from '../components/BoxLink'

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

        const menus = {
            's02': {
                title: 'Opportunity Overview',
                id: 'opptyOverview',
                subMenus: [
                    {
                        title: 'Opportunity Description',
                        url: '#test'
                    },
                    {
                        title: 'Pursuit Team Contact',
                        url: '#contacts'
                    },
                    {
                        title: 'Key Dates',
                        url: '#keyDates'
                    },
                    {
                        title: 'Client Pursuit Context',
                        url: '#clientPursuitContext'
                    },
                    {
                        title: 'Scope',
                        url: '#scope'
                    }
                ]
            },
            's03': {
                title: 'Solution Strategy',
                id: 'solnStrategy',
                subMenus: []
            },
            's04': {
                title: 'Solution Design',
                id: 'solnDesign',
                subMenus: []
            },
            's05': {
                title: 'Critical Risks, Assumptions and Mitigations',
                id: 'riskAssumption',
                subMenus: []
            },
            's06': {
                title: 'Required Documents',
                id: 'requiredDoc',
                subMenus: []
            },
            's07': {
                title: 'Handover to Delivery',
                id: 'handoverToDelirery',
                subMenus: []
            },
        }

        return (
            <div className="container sections-container">
                <p>
                    {'CLIENT SOLUTION for '}{opptyId}{' ('}{opptyName}{')'}
                </p>
                <Nav bsStyle="pills">
                    <BoxLink data={menus.s02} />  
                    <BoxLink data={menus.s03} />  
                    <BoxLink data={menus.s04} />  
                    <BoxLink data={menus.s05} />  
                    <BoxLink data={menus.s06} />  
                    <BoxLink data={menus.s07} />   
                </Nav>
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