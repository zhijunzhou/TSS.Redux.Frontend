import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {loadAll} from '../actions'
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
        return (
            <tr>
                <td>
                    {
                        oppty.isMine === true
                        ? <Link to={`/cs/${oppty.opptyId}?opptyName=${oppty.opptyName}`}>{oppty.opptyId}</Link>
                        : oppty.opptyId
                    }                    
                </td>
                <td>{oppty.opptyName}</td>
                <td></td>
                <td></td>
            </tr>
        )
    }

    render() {
        const { allOppties } = this.props
        return (
            <div>
                <b>All Opportunities</b>
                <table width="100%">
                    <thead>
                        <tr>
                            <td><b>Opportunity ID</b></td>
                            <td><b>Opportunity Name</b></td>
                            <td><b></b></td>
                            <td><b></b></td>
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