function index(req, res) {
  res.render('todos/index', {
    todos: todos
  })
}