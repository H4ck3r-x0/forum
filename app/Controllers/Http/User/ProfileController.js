'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class ProfileController {
  async index ({view, request}) {
    var username = request.params.username
    var userData = await Database
              .table('users')
              .where('username', username)
              .first()
    var created_at = User.formatDates(userData.created_at)
    return view.render('user/profile', {userData: userData, created_at: created_at})
  }
}

module.exports = ProfileController
