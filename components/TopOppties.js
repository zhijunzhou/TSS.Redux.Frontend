import React, { Component, PropTypes } from 'react'
import { Nav } from 'react-bootstrap'
import BoxLink from './BoxLink'

class TopOppties extends Component {

    static propTypes = {
        recents: PropTypes.object.isRequired
    }

    getMyOppty(recents) {
        if(recents && recents.length > 0) {
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

    render() {
        const {recents} = this.props
        const my = this.getMyOppty(recents)
        const oppty = [
            {/*divider*/},  
            {
                title: 'My Opportunities',
                url: '/cs/myOppty',
                isOuter: false
            },
            {
                title: 'All Opportunities',
                url: '/cs/allOppty',
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
        
        return (
            <div className="container portal-container">
                <Nav bsStyle="pills">
                    <BoxLink data={menus.cs} />  
                    <BoxLink data={menus.gsa} />  
                    <BoxLink data={menus.cs} />  
                    <BoxLink data={menus.cs} />  
                    <BoxLink data={menus.cs} />  
                    <BoxLink data={menus.cs} /> 
                    <BoxLink data={menus.cs} />  
                    <BoxLink data={menus.cs} />       
                </Nav>
            </div>
        )
    }
}

export default TopOppties