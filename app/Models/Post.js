'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
  static boot() {
    super.boot()
    this.addTrait('Slugify')
  }


  static get dates () {
    return super.dates.concat(['last_reply_at'])
  }

  static castDates (field, value) {
    if (['created_at', 'updated_at'].includes(field)) {
      return `${value.fromNow(true)} ago`
    }

    return super.formatDates(field, value)
  }

  tag () {
    return this.belongsTo('App/Models/Tag')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  replies () {
    return this.hasMany('App/Models/Post', 'id', 'parent_id')
      .orderBy('created_at', 'asc')
  }

  lastReply () {
    return this.hasOne('App/Models/Post', 'id', 'parent_id')
      .orderBy('created_at', 'asc')
  }
}

module.exports = Post
