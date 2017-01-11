import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAll } from '../actions'
import { Link } from 'react-router'

const loadData = props => {
    props.loadAll()
}

class AllOppty extends Component {

    static propTypes = {
        allOppties: PropTypes.object.isRequired
    }

    componentWillMount() {
        loadData(this.props)
    }

    renderOppty(oppty) {
        var bidMgrOrPem = null
        var lpa = []

        if(oppty.contact && oppty.contact.content) {
            var content = oppty.contact.content
            var leadRegion = oppty.leadRegion

            if (content.primary.bidMgr != null) {
                bidMgrOrPem = content.primary.bidMgr;
            } else if (content[leadRegion].bidMgr != null) {
                bidMgrOrPem = content[leadRegion].bidMgr;
            } else if (content.primary.pursuitEngagementMgr != null) {
                bidMgrOrPem = content.primary.pursuitEngagementMgr;
            } else if (content[leadRegion].pursuitEngagementMgr != null) {
                bidMgrOrPem = content[leadRegion].pursuitEngagementMgr;
            } else {
                bidMgrOrPem = null;
            }

            // lpa (Solution Consultant / Lead Practice Architect (LPA))
            if (content.primary.solnConsultant != null && content.primary.solnConsultant.length > 0) {
                lpa = content.primary.solnConsultant;
            } else if (content[leadRegion].solnConsultant != null && content[leadRegion].solnConsultant.length > 0) {
                lpa = content[leadRegion].solnConsultant;
            } else {
                lpa = [];
            }
        }


        return (
            <tr key={oppty.opptyId}>
                <td className="text-nowrap">
                    {
                        oppty.isMine === true
                        ? <Link to={`/cs/${oppty.opptyId}?opptyName=${oppty.opptyName}`}>{oppty.opptyId}</Link>
                        : oppty.opptyId
                    }                    
                </td>
                <td>{oppty.opptyName}</td>
                <td>{oppty.clientName}</td>
                <td>
                    {
                        bidMgrOrPem ? <a href={'mailto:' + bidMgrOrPem.email}>{bidMgrOrPem.title}</a> : null
                    }
                </td>
                <td>
                    {
                        lpa.map((role, index)=>(<div key={role.email + index}><a href={'mailto:' + role.email}>{role.title}</a></div>))
                    }
                </td>
                <td></td>
            </tr>
        )
    }

    render() {
        const { allOppties } = this.props
        return (
            <div>
                <table width="100%" className="table table-striped table-bordered">
                    <thead className="thead-inverse">
                        <tr>
                            <td className="text-nowrap">Opportunity ID</td>
                            <td className="text-nowrap">Opportunity Name</td>
                            <td className="text-nowrap">Client Name</td>
                            <td className="text-nowrap">Bid Manager / PEM</td>
                            <td className="text-nowrap">Solution Consultant / Lead Practice Architect (LPA)</td>
                            <td className="text-nowrap">Option Available</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(allOppties).map(opptyId => {
                                return this.renderOppty(allOppties[opptyId])
                            })
                        }                        
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        allOppties:state.entities.oppties
    }
}

export default connect(mapStateToProps, {
    loadAll
})(AllOppty)