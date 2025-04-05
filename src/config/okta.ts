import { OktaAuth } from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth({
  issuer: "https://dev-23539720.okta.com/oauth2/default",
  clientId: "0oao5t7a2kGMGzM6r5d7",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  tokenManager: {
    autoRenew: true,
    storage: "localStorage"
  },
  responseMode: "query",
  responseType: ["code"],
  transformAuthState: async (oktaAuth, authState) => {
    if (!authState.isAuthenticated) {
      return authState;
    }
    const user = await oktaAuth.getUser();
    return { ...authState, user };
  }
});

export default oktaAuth;
