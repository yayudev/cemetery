/* eslint-env browser */
import React  from 'react'
import Router from 'react-router'
import routes from './router.jsx'


Router.run(routes, Router.HashLocation, (Root) => {
  React.render( <Root />, document.getElementById('app') )
})
