$ = require 'jquery'
_ = require 'underscore'


class View
  constructor: (container) ->
    container = $(container)
    container._view = this
    @containerID = container.id ?= _.uniqueId 'container_'



module.exports = View