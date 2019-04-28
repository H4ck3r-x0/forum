'use strict'

const Post = use('App/Models/Post')

class TagPostController {
  async index ({ view, params }) {
    let posts = await Post.query()
    .forIndex()
    .whereHas('tag', (builder) => {
      builder.where('slug', params.slug)
    })
    .fetch()

    return view.render('home', {posts: posts})
  }
}

module.exports = TagPostController
