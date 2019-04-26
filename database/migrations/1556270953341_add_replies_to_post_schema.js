'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddRepliesToPostSchema extends Schema {
  up () {
    this.table('posts', (table) => {
      table.integer('parent_id').unsigned().index()
    })
  }

  down () {
    this.table('posts', (table) => {
      table.dropColumn('parent_id')
    })
  }
}

module.exports = AddRepliesToPostSchema
