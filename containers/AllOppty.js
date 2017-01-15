import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAll } from '../actions'
import { Link } from 'react-router'

const loadData = props => {
    props.loadAll()
}

class AllOppty extends Component {

    static propTypes = {
        allOppties: PropTypes.array.isRequired
    }

    componentWillMount() {
        loadData(this.props)
    }

    renderOppty(oppty, idx) {
        return (
            <tr key={oppty.opptyId + idx}>
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
                    {oppty.bidManagerorPEM ? <a href={'mailto:' + oppty.bidManagerorPEM.email}>{oppty.bidManagerorPEM.title}</a> : null}                    
                </td>
                <td>
                    {
                        oppty.solutionConsulantOrLPA
                        ? oppty.solutionConsulantOrLPA.map((role, index)=>{
                            if(role) {
                                return <div key={oppty.opptyId + idx + index}><a href={'mailto:' + role.email}>{role.title}</a></div>
                            }
                            return null
                        })                        
                        : null
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
                            allOppties && allOppties.length > 0
                            ?
                            allOppties.map((oppty, idx) => {
                                return this.renderOppty(oppty, idx)
                            })
                            : <tr><td colSpan="6">loading...</td></tr>
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