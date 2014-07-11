express = require 'express'
http = require 'http'

app = express()

app.set 'port', process.env.PORT || 3000
app.use express.favicon()
app.use express.logger('dev')
app.use app.router
app.use express.static(__dirname + '/../public')

server = http.createServer app
server.listen app.get 'port'

console.log "Express server listening on port %d", app.get 'port'