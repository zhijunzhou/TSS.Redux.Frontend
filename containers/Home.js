import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resetErrorMessage } from '../actions'
import CommonNav from '../components/CommonNav'
import '../styles/index.css'

class Home extends Component {

    static propTypes = {
        pathname: PropTypes.string.isRequired,
        children: PropTypes.node
    }
   
    render() {
        const {children, pathname} = this.props
        const dyStyleClass = pathname === "" || pathname.startsWith('cs/') ? 'home' : 'other'

        return (
            <div className={dyStyleClass}>
                <CommonNav value={pathname} />
                {children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const errorMessage = state.errorMessage
    const pathname = ownProps.location.pathname.substring(1)

    return {
        errorMessage,
        pathname
    }
}

export default connect(mapStateToProps, {
    resetErrorMessage
})(Home)