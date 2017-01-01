import React, {Component} from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive'
import TopOppties from '../components/TopOppties'
import TopOpptiesPhoneView from '../components/TopOpptiesPhoneView'
import { resetErrorMessage, loadTop } from '../actions'

const loadData = props => {
    props.loadTop()
}

const getMyOppty = recents => {
    if(recents && Object.keys(recents).length > 0) {
        return Object.keys(recents).map(opptyId => {    
            return {
                title: `${opptyId}/${recents[opptyId].opptyName}`,
                url: `/cs/${opptyId}?opptyName=${recents[opptyId].opptyName}`,
                isOuter: false
            }
        })
    }
    
    return [{
        title: `OPE-0006210043/DtO MAE`,
        url: `/cs/OPE-0006210043?opptyName=DtO MAE`,
        isOuter: false
    }]      
}

class Portal extends Component {

    componentWillMount() {
        loadData(this.props)
    }

    render() {
        const {menus} = this.props
        
        return (
            <div className="container portal-container">
                <MediaQuery query='(min-device-width: 1224px)'>
                    <MediaQuery query='(min-device-width: 1824px)'>
                        <TopOppties menus={menus}/>
                    </MediaQuery>
                    <MediaQuery query='(max-width: 1224px)'>
                        <TopOpptiesPhoneView menus={menus} />
                    </MediaQuery>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <div>You are a tablet or mobile phone</div>
                </MediaQuery>
                <MediaQuery query='(orientation: portrait)'>
                    <div>You are portrait</div>
                </MediaQuery>
                <MediaQuery query='(orientation: landscape)'>
                    <TopOppties menus={menus}/>
                </MediaQuery>
                <MediaQuery query='(min-resolution: 2dppx)'>
                    <div>You are retina</div>
                </MediaQuery>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const errorMessage = state.errorMessage
    const pathname = ownProps.location.pathname.substring(1)
    const {recents} = state.entities
    const my = getMyOppty(recents)
    const oppty = [
        {/*divider*/},  
        {
            title: 'My Opportunities',
            url: '/myOppty',
            isOuter: false
        },
        {
            title: 'All Opportunities',
            url: '/allOppty',
            isOuter: false
        }
    ]

    const menus = {
            cs: {
                title: 'Client Solution',
                id: 'clientSoln',
                subMenus: []
            },
            gsa: {
                title: 'Gold Source Artifacts',
                id: 'goldSrcArtifacts',
                subMenus: [
                    {
                        title: 'What We Solution',
                        url: '#test',
                        isOuter: true
                    }
                ]
            }
        }

        menus.cs.subMenus = [...my, ...oppty]

    return {
        errorMessage,
        pathname,
        menus
    }
}

export default connect(mapStateToProps, {
    resetErrorMessage,
    loadTop
})(Portal)