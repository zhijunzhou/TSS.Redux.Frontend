import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
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
        children: PropTypes.node
    }

    componentWillMount() {
        loadData(this.props)
    }
   
    render() {
        const {children, pathname} = this.props
        return (
            <div>
                <CommonNav value={pathname} />
                <TopOppties />                
                {children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage,
  pathname: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {
    resetErrorMessage,
    loadTop
})(Home)