'use strict'

const Hash = use('Hash')
const md5 = require('md5')

/** @type {import('@adonisjs/framework/src/Hash')} */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get computed () {
    return [
      'avatar'
    ]
  }

  static castDates (field, value) {
    if (['created_at', 'updated_at'].indexOf(field) > -1) {
        return value.format('YYYY-MM-DD')
    }
    return super.formatDates(field, value)
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }

  getAvatar ({ email }) {
    return `https://www.gravatar.com/avatar/${md5(email)}?s=100&d=mm`
  }
}

module.exports = User
