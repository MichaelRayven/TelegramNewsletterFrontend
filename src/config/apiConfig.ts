export default {
  baseURL: "http://localhost:3000/",
  apiVersion: "v1",
  loginEndpoint: 'user/login',
  registerEndpoint: 'user/signup',
  logoutEndpoint: 'user/logout',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'JWT',
}