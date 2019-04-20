'use strict'



/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home').as('home')


Route.get('/auth/register', 'Auth/RegisterController.index')
    .middleware('CheckLoggedIn').as('auth.register')

Route.post('/auth/register', 'Auth/RegisterController.register')
    .as('auth.register')


Route.get('/auth/login', 'Auth/LoginController.index')
    .middleware('CheckLoggedIn').as('auth.login')

Route.post('/auth/login', 'Auth/LoginController.login')
    .as('auth.login')


Route.get('/auth/logout', ({response, auth}) => {
  auth.logout()
  return response.route('home')
}).middleware('auth').as('auth.logout')
