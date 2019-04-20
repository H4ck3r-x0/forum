'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class CheckLoggedIn {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, auth }, next) {
        try {
            const user = await auth.check()
            if(user) {
              return response.route('home')
            }
          } catch (error) {
            await next()
        }

  }
}

module.exports = CheckLoggedIn
