const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

let assistantId = '9e4a9b61-7ad7-46f2-87cf-95902f5266c3'
let apikey = 'k7PFODCWMo9BNV01040XM9SLaFwRMVlELl-_cEWEtiIA'
let url = 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/964bce71-297d-488f-81b7-e408d2d21643'

const assistant = new AssistantV2({
    version: '2021-11-27',
    authenticator: new IamAuthenticator({
        apikey: apikey,
    }),
    serviceUrl: url,
});

exports.getSession = () => {
    return new Promise((resolve, reject) => {

        assistant.createSession({
            assistantId: assistantId
        }).then(res => {
            resolve(res.result ? res.result : null);
        }).catch(err => {
            reject(err);
        });
    })
}



exports.message = (text, sessionID) => {
    return new Promise((resolve, reject) => {
        assistant.message({
            assistantId: assistantId,
            sessionId: sessionID,
            context: {},
            input: {
                'message_type': 'text',
                'text': text
            }
        }).then(res => {
            resolve(res.result);
        }).catch(err => {
            reject(err);
        });
    })
}


// this.getSession().then(resp => console.log(resp)).catch(err => console.log(err));

// this.message('Hola', 'a28acf1c-23f9-4f4d-992e-1def9d5993d6').then(res => console.log(res)).catch(err => console.log(err))