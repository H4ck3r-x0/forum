'use strict'

const Post = use('App/Models/Post')

class OwnPostController {
  async index ({ view, auth }) {
    let posts = await Post.query()
    .forIndex()
    .where('user_id', auth.user.id)
    .fetch()

    return view.render('home', {posts: posts})
  }
}

module.exports = OwnPostController
