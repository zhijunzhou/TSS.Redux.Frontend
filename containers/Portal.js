import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import TopOppties from '../components/TopOppties'
import { resetErrorMessage, loadTop } from '../actions'

const loadData = props => {
    props.loadTop()
}

class Portal extends Component {

    componentWillMount() {
        loadData(this.props)
    }

    renderOppty(oppty) {
        return (
            <li key={oppty.opptyId}>
                <Link to={`/cs/${oppty.opptyId}?opptyName=${oppty.opptyName}`}>{oppty.opptyId}{'/'}{oppty.opptyName}</Link>
            </li>
        )
    }

    render() {
        const {recentOppties} = this.props
        return (
            <TopOppties recents={recentOppties} renderItem={this.renderOppty} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const errorMessage = state.errorMessage
    const pathname = ownProps.location.pathname.substring(1)
    const {recents} = state.entities

    return {
        errorMessage,
        pathname,
        recentOppties:recents
    }
}

export default connect(mapStateToProps, {
    resetErrorMessage,
    loadTop
})(Portal)