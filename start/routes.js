'use strict'



/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home').as('home')

Route.group(() => {
  // auth routes
  Route.get('register', 'Auth/RegisterController.index')
      .middleware('guest').as('auth.register')

  Route.post('register', 'Auth/RegisterController.register')
      .as('auth.register')

  Route.get('login', 'Auth/LoginController.index')
      .middleware('guest').as('auth.login')

  Route.post('login', 'Auth/LoginController.login')
      .as('auth.login')

  Route.get('logout', ({response, auth}) => {
    auth.logout()
    return response.route('home')
  }).middleware('auth').as('auth.logout')
  // end auth routes
}).prefix('auth')

// posts routes
Route.group(() => {
  Route.get('create', 'PostController.create')
  .as('post.create').middleware(['auth'])
  Route.post('store', 'PostController.store')
  .as('post.store').middleware(['auth'])
}).prefix('posts')

// user profile ..
Route.group(() => {
  Route.get(':username', 'User/ProfileController.index').as('userProfile')
}).prefix('profile')
