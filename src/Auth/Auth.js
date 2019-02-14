/* eslint no-restricted-globals: 0*/
import auth0 from 'auth0-js'

const LOGIN_SUCCESS_PAGE = "/secret"
const LOGIN_FAILURE_PAGE = "/"

export default class Auth{
    auth0 = new auth0.WebAuth({
        clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        responseType: 'token id_token',
        redirectUri: process.env.REACT_APP_CALLBACK_URL,
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize({
            connection: 'google-oauth2',
        });
    }

    handleAuthentication() {
        this.auth0.parseHash((error, authResults) => {

            if(authResults && authResults.accessToken && authResults.idToken){
                let expiresAt = JSON.stringify((authResults.expiresIn)*1000 + new Date().getTime())
                localStorage.setItem("access_token", authResults.accessToken)
                localStorage.setItem("id_token", authResults.idToken)
                localStorage.setItem("expires_at", expiresAt)
                location.hash = ""
                location.pathname = LOGIN_SUCCESS_PAGE
            } else if(error) { 
                location.pathname = LOGIN_FAILURE_PAGE
                console.log(error)
            }
        })
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"))
        var isAuthenticated = (new Date().getTime() < expiresAt) ? true : false
        return isAuthenticated;
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");

        location.pathname = LOGIN_FAILURE_PAGE
    }
}