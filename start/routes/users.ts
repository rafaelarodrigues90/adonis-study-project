import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('register', 'Users/AuthController.register').as('register')
  Route.post('login', 'Users/AuthController.login').as('login')
  Route.post('logout', 'Users/AuthController.logout').as('logout')
  Route.get('/verify-email/:email', 'Users/EmailVerificationsController.confirm').as('verifyEmail')
}).prefix('api/v1/users/')
