'use strict'

const { validateAll } = use('Validator')

class LoginController {

    index({view}) {
      return view.render('auth/login')
    }

    async login ({response, request, session, auth}) {
      const {email, password} = request.all()

      const rules = {
        email: 'required',
        password: 'required'
      }


      const validation = await validateAll(request.all(), rules)

      if (validation.fails()) {
           session
             .withErrors(validation.messages())
             .flashExcept(['password'])

           return response.redirect('back')
         }

      await auth.attempt(email, password)

      return response.route('home')

    }
}

module.exports = LoginController
