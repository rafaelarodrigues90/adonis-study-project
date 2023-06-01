import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('register', 'Users/AuthController.register').as('register')
}).prefix('api/v1/users/')
