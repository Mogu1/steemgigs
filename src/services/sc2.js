import sc2 from 'sc2-sdk'

const sc = sc2.Initialize({
  baseURL: 'https://steemconnect.com',
  app: 'steemgig.app',
  // callbackURL: 'http://localhost:8080/complete',
  callbackURL: 'https://steemgigsorg.firebaseapp.com/complete',
  scope: ['login', 'vote', 'comment', 'comment_delete', 'comment_options', 'custom_json']
})

export default sc
