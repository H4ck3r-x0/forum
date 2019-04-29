'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddAnswerIdToPostsSchema extends Schema {
  up () {
    this.table('posts', (table) => {
      table.integer('answer_id').unsigned().index()
    })
  }

  down () {
    this.table('posts', (table) => {
      table.dropColumn('answer_id')
    })
  }
}

module.exports = AddAnswerIdToPostsSchema
