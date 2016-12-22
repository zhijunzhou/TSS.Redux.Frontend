import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadDocument } from '../actions'
import SectionNav from '../components/SectionNav'
import S0201 from '../sections/S0201'
import S0202 from '../sections/S0202'
import S0203 from '../sections/S0203'
import S0204 from '../sections/S0204'
import S0205 from '../sections/S0205'
import S0206 from '../sections/S0206'
import S0207 from '../sections/S0207'

const loadData = props => {
    props.loadDocument(props.opptyId, props.sectionName)
}

class CSSectionLoader extends Component {

    static propTypes= {
        opptyId: PropTypes.string,
        opptyName: PropTypes.string,
        sid: PropTypes.string.isRequired,
        sectionName: PropTypes.string,
        loadDocument: PropTypes.func.isRequired
    }

    componentWillMount() {
        loadData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        // retrieve document if the section's name is different
        if(nextProps.sectionName !== this.props.sectionName) {
            loadData(nextProps)
        }
    }

    renderAvailableSection() {
        const {sid} = this.props
        return (
            <div>
                {sid === '0201' ? <S0201 {...this.props} /> : null}
                {sid === '0202' ? <S0202 {...this.props} /> : null}
                {sid === '0203' ? <S0203 {...this.props} /> : null}
                {sid === '0204' ? <S0204 {...this.props} /> : null}
                {sid === '0205' ? <S0205 {...this.props} /> : null}
                {sid === '0206' ? <S0206 {...this.props} /> : null}
                {sid === '0207' ? <S0207 {...this.props} /> : null}
            </div>
        )
    }

    render() {        
        return (
            <div>
                <p>
                    <b>Client Solution Sections Loader</b>
                </p>                
                <SectionNav {...this.props} />
                {this.renderAvailableSection()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let sectionName = undefined
    let sectionData = undefined

    if(state.entities.doc.hasOwnProperty(ownProps.params.sid)) {
        sectionName = state.entities.doc[ownProps.params.sid].name
        sectionData = state.entities.doc[ownProps.params.sid].data
    }

    return {
        opptyId: ownProps.params.opptyId,
        sid: ownProps.params.sid,
        opptyName: ownProps.location.query.opptyName,
        sectionName: sectionName,
        sectionData: sectionData,
        originalDocument: state.entities.doc
    }    
}

export default connect(mapStateToProps, {
    loadDocument
})(CSSectionLoader)