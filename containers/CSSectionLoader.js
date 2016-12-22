import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadDocument, jumpTo } from '../actions'
import SectionNav from '../components/SectionNav'
import S0201 from '../sections/S0201'
import S0202 from '../sections/S0202'
import S0203 from '../sections/S0203'
import S0204 from '../sections/S0204'
import S0205 from '../sections/S0205'
import S0206 from '../sections/S0206'
import S0207 from '../sections/S0207'

const loadData = props => {
    props.loadDocument(props.opptyId)
}

class CSSectionLoader extends Component {

    static propTypes= {
        opptyId: PropTypes.string,
        opptyName: PropTypes.string,
        sid: PropTypes.string.isRequired,
        jumpTo: PropTypes.func.isRequired,
        loadDocument: PropTypes.func.isRequired
    }

    componentWillMount() {
        loadData(this.props)
    }

    renderAvailableSection() {
        const {sid} = this.props
        return (
            <div>
                {sid === '0201' ? <S0201 /> : null}
                {sid === '0202' ? <S0202 /> : null}
                {sid === '0203' ? <S0203 /> : null}
                {sid === '0204' ? <S0204 /> : null}
                {sid === '0205' ? <S0205 /> : null}
                {sid === '0206' ? <S0206 /> : null}
                {sid === '0207' ? <S0207 /> : null}
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

const mapStateToProps = (state, ownProps) => ({
    opptyId: ownProps.params.opptyId,
    sid: ownProps.params.sid,
    opptyName: ownProps.location.query.opptyName,
    originalDocument: state.entities.doc
})

export default connect(mapStateToProps, {
    loadDocument,
    jumpTo
})(CSSectionLoader)