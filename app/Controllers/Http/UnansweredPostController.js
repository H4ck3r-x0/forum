'use strict'

const Post = use('App/Models/Post')

class UnansweredPostController {
  async index ({ view, request }) {
    let posts = await Post.query()
    .forIndex()
    .doesntHave('replies')
    .paginate(request.input('page', 1), 4)

    return view.render('home', {posts: posts})
  }
}

module.exports = UnansweredPostController
