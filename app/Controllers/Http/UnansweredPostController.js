'use strict'

const Post = use('App/Models/Post')


class UnansweredPostController {
  async index ({ view }) {
    let posts = await Post.query()
    .with('tag')
    .with('user')
    .with('replies')
    .with('lastReply')
    .with('lastReply.user')
    .whereNull('parent_id')
    .doesntHave('replies')
    .orderBy('last_reply_at', 'desc')
    .fetch()

    return view.render('home', {posts: posts})
  }
}

module.exports = UnansweredPostController
