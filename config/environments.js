const sp = {
    app: {
        filename: 'environment',
        version: '1.0',
        base: {
            isUSPS: false,
            isGzip: true
        },
        config: {
            dev: {
                isGzip: false,
                site: /\/ESSolutionSource-QA($|\/)/i,
                services: {
                    centerService: 'https://c9w21442.americas.hpqcorp.net',
                    coreService: 'https://c4w19235.americas.hpqcorp.net',
                    raService: null,
                    diService: 'https://c9w19662.americas.hpqcorp.net',
                    cmtService: 'https://c4w24116.americas.hpqcorp.net:30568'
                }
            },
            staging: {
                site: /\/ESSolutionSource-Staging($|\/)/i,
                services: {
                    centerService: 'https://c9w21442.americas.hpqcorp.net',
                    coreService: 'https://c4w19235.americas.hpqcorp.net',
                    raService: null,
                    diService: 'https://c9w19662.americas.hpqcorp.net',
                    cmtService: 'https://c4w24116.americas.hpqcorp.net:30568'
                }
            },
            prod: {
                site: /\/ESSolutionSource($|\/)/i,
                services: {
                    centerService: 'https://c9w21442.americas.hpqcorp.net',
                    coreService: 'https://c4w19235.americas.hpqcorp.net',
                    raService: null,
                    diService: 'https://c9w19662.americas.hpqcorp.net',
                    cmtService: 'https://c4w24116.americas.hpqcorp.net:30568'
                }
            }
        }
    }
}

const uri = window.location.href

const updateConfig = (env) => { 
    window.sp = sp
    console.log('inited')
}

const initConfig = () => {

    for (let env in sp.app.config) {
        if (sp.app.config[env].site.test(uri)) {
            updateConfig(env)
            break;
        }
    }

    updateConfig(sp.app.config.dev)
}

initConfig()