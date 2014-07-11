{exec} = require 'child_process'
path   = require 'path'

task 'touch', ->
  exec "find src -name *.coffee -exec touch {} \\;"

task 'build', 'Build project from src/rest-fx/*.coffee to public/scripts/rest-fx/*.js', ->
  exec 'coffee --compile --output public/scripts/rest-fx/ src/rest-fx/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

task 'build:showcase', 'Build project from src/showcase/*.coffee to lib/*.js', ->
  exec 'coffee --compile --output api/ src/showcase/api/', (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
