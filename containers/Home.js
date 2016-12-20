import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import {resetErrorMessage, loadTop} from '../actions'
import CommonNav from '../components/CommonNav'
import TopOppties from '../components/TopOppties'

const loadData = props => {
    props.loadTop()
}

class Home extends Component {

    static propTypes = {
        pathname: PropTypes.string.isRequired,
        loadTop: PropTypes.func.isRequired,
        recentOppties: PropTypes.object.isRequired,
        children: PropTypes.node
    }

    componentWillMount() {
        loadData(this.props)
    }

    renderOppty(oppty) {
        return (
            <li>
                <Link to={`/cs/${oppty.opptyId}?opptyName=${oppty.opptyName}`}>{oppty.opptyId}{'/'}{oppty.opptyName}</Link>
            </li>
        )
    }
   
    render() {
        const {children, pathname, recentOppties} = this.props
    
        return (
            <div>
                <CommonNav value={pathname} />
                <TopOppties recents={recentOppties} renderItem={this.renderOppty} />                
                {children}
            </div>
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
})(Home)