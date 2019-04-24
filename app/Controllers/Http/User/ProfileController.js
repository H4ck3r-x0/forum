'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class ProfileController {
  async index ({view, params, request}) {
    var username = request.params.username
    const userData = await User.query()
           .where('username', params.username)
           .firstOrFail()
    return view.render('user/profile', {userData: userData.toJSON()})
  }
}

module.exports = ProfileController
