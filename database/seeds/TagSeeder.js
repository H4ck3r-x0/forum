'use strict'

/*
|--------------------------------------------------------------------------
| TagSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Tag = use('App/Models/Tag')

class TagSeeder {
  async run () {
    await Tag.createMany([
      { name: 'Help Wanted', 'slug': 'help-wanted'},
      { name: 'Feature request', 'slug': 'feature-request'},
      { name: 'Bug', 'slug': 'bug'}
    ])
  }
}

module.exports = TagSeeder
