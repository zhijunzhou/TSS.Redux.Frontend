import { generateSections } from '../models/Sections'

const getObjectByPath = (o, s) => {
    s = s.replace(/\[(\w+)\]/g, '.$1')
    s = s.replace(/^\./, '')
    var a = s.split('.')
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i]
        if (o != null) {
            if (k in o) {
                o = o[k]
            } else {
                return
            }
        }
    }
    return o
}

export const parseSectionConfiguration = (data) => {
    var doc = {}

    for (let sid in data) {
        if(data[sid]) {
            let section = data[sid]

            doc[sid] = {
                title: '',
                fullTitle: '',
                name: '',
                path: ''
            }
            doc[sid].title = section[0]
            doc[sid].fullTitle = section[1]
            doc[sid].name = section[2]
            doc[sid].path = section[3]
        }        
    }
}

const parseSingleSection = (doc, section, sid, nextSid) => {
    if(!section) {
        section = {
            lastUpdated: "",
            editor: undefined,
            completed: 0,
            permissions: doc[sid].permissions,
            data: undefined
        }
    }

    if (section.hasOwnProperty('lastUpdated')) {
        doc[sid].data = section.data
        doc[sid].lastUpdated = section.lastUpdated
        doc[sid].editor = section.editor
        doc[sid].completed = section.completed 
                            ? section.completed 
                            : (section.lastUpdated.slice(0, 4) > 1969 ? 1 : 0)
        doc[sid].permissions = section.permissions 
                            ? section.permissions 
                            : { basic: "none" }

        if (doc[sid].permissions.basic !== "none" 
            && doc[sid].hideFromNav === false) {
            // cache the current sid as next
            if(nextSid === '') {
                nextSid = sid
            }                         
            if(doc[nextSid].sid) {
                doc[nextSid].sid.next = sid
            }
            
            // set next and previous
            doc[sid].sid = {
                prev: nextSid,
                current: sid,
                next: sid
            }
            // set previous section's next sid
            nextSid = sid
        }
    }

    return nextSid
}

export const resolveOppty = (_document) => {
    let keys = Object.keys(_document)
    let doc = generateSections()

    let opptyId = keys.length === 1 ? keys[0] : null
    let document = _document[opptyId]

    if (document.hasOwnProperty('data')) {
        let nextSid = ''
        for (let sid in doc) {
            if (doc[sid].path) {
                let section = getObjectByPath(document.data, doc[sid].path) 
                nextSid = parseSingleSection(doc, section, sid, nextSid) 
            }
        }
    }

    return doc
}