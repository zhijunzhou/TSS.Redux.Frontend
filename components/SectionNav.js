import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class SectionNav extends Component {

    jumpPrev = e => {
        const {originalDocument, sid, opptyId, opptyName} = this.props
        const sidObj = originalDocument[sid].sid

        if(sidObj.prev !== sidObj.current) {
            browserHistory.push(`/loader/${opptyId}/${sidObj.prev}?opptyName=${opptyName}`)
        }        

        e.preventDefault()
    }

    jumpNext = e => {
        const {originalDocument, sid, opptyId, opptyName} = this.props
        const sidObj = originalDocument[sid].sid

        if(sidObj.next !== sidObj.current) {
            browserHistory.push(`/loader/${opptyId}/${sidObj.next}?opptyName=${opptyName}`)
        }        

        e.preventDefault()
    }

    render() {

        const {opptyId, opptyName, originalDocument, sid} = this.props
        var title = '...'

        if(originalDocument.hasOwnProperty(sid)) {
            title = originalDocument[sid].title
        }        

        return (
            <p>                
                <button onClick={this.jumpPrev}>Previous</button>
                {' '}
                <button onClick={this.jumpNext}>Next</button>
                {' '}
                {opptyId}{' | '}{opptyName}{' | '}{title}
            </p>
        )
    }
}

export default SectionNav