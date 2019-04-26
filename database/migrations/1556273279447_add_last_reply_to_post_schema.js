'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddLastReplyToPostSchema extends Schema {
  up () {
    this.table('posts', (table) => {
      table.timestamp('last_reply_at')
    })
  }

  down () {
    this.table('posts', (table) => {
      table.dropColumn('last_reply_at')
    })
  }
}

module.exports = AddLastReplyToPostSchema
