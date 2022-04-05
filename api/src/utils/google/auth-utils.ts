import {google} from 'googleapis';
import * as dotenv from 'dotenv'
dotenv.config()
// for type only
import { OAuth2Client } from 'google-auth-library';

// configs for google auth 
const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirect: process.env.GOOGLE_REDIRECT_URI
}



//scope for getting user info
const Scope = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
]

const createConnectionToGoogle = () => {
    return new google.auth.OAuth2(
        googleConfig.clientID,
        googleConfig.clientSecret,
        googleConfig.redirect
    )
}

const createConnectUrlToGoogleAuth = (auth:OAuth2Client, id:string) => {
    return auth.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent',
        scope: Scope,
        state : id
    })
}


export const OauthUrlToGoogle = (id:string) => {
    const auth = createConnectionToGoogle()
    return createConnectUrlToGoogleAuth(auth, id)
}

// call back function

const getGoogleAuthApi = (auth:OAuth2Client) => {
    return google.oauth2({
        auth: auth,
        version: 'v2'
    })
}

export const getGoogleAccountFromCode = async(code:string) => {
    const auth = createConnectionToGoogle();
    const data = await auth.getToken(code);
    const tokens = data.tokens;
    auth.setCredentials(tokens);
    const Oauth = getGoogleAuthApi(auth);
    const me = await Oauth.userinfo.get();  
    return {token : tokens, user: me.data};
}