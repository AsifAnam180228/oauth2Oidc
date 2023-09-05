import { Injectable } from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer : 'http://192.168.3.19:9072',
  redirectUri: window.location.origin,
  clientId: 'sa',
  responseType: 'code',
  scope: 'openid',
  showDebugInformation: true,
  requireHttps: false,


}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  login(){
    this.oauthService.initCodeFlow()
  }

  logOut(){
    this.oauthService.logOut()
  }
  refresh(){

  }
  get isLoggedIn(){
    return !!this.oauthService.getIdToken()
  }
  getAccessToken(){
    return this.oauthService.getAccessToken()
  }
  getRefreshToken(){
    return this.oauthService.getRefreshToken()
  }
}
