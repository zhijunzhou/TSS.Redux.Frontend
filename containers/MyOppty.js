import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadMy } from '../actions'
import { Link } from 'react-router'

const loadData = props => {
    props.loadMy()
}

class MyOppty extends Component {

    static propTypes = {
        myOppties: PropTypes.array.isRequired
    }

    componentWillMount() {
        loadData(this.props)
    }

    renderOppty(oppty, idx) {
        return (
            <tr key={oppty.opptyId + idx}>
                <td className="text-nowrap">
                    <Link to={`/cs/${oppty.opptyId}?opptyName=${oppty.opptyName}`}>{oppty.opptyId}</Link>
                </td>
                <td>{oppty.opptyName}</td>
                <td>{oppty.clientName}</td>
                <td></td>
            </tr>
        )
    }

    render() {
        const {myOppties} = this.props
        return (
            <div>
                <table width="100%" className="table table-striped table-bordered">
                    <thead className="thead-inverse">
                        <tr>
                            <td className="text-nowrap">Opportunity ID</td>
                            <td className="text-nowrap">Opportunity Name</td>
                            <td className="text-nowrap">Client Name</td>
                            <td className="text-nowrap">Option Available</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOppties && myOppties.length > 0
                            ?
                            myOppties.map((oppty, idx) => {
                                return this.renderOppty(oppty, idx)
                            })
                            : <tr><td colSpan="4">loading...</td></tr>
                        }                        
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        myOppties: state.entities.my
    }
}

export default connect(mapStateToProps, {
    loadMy
})(MyOppty)