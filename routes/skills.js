import { Router } from 'express'
import { skills } from '../data/skills-data.js'


const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export {
  router
}
