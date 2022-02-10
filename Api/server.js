const express = require('express')
const axios = require('axios').default
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let taskStorage = []

const getTaskFromStore = async (quantity) => {
  if (quantity > taskStorage.length) {
    const response = await axios.get(`https://lorem-faker.vercel.app/api?quantity=${quantity - taskStorage.length}`)
    const taskWithUuids = response.data.map((task) => ({ uuid: uuidv4(), title: task }))
    taskStorage.push(...taskWithUuids)
  }
  return taskStorage.slice(0, quantity)
}

app.get('/tasks', async (req, res) => {
  const quantity = req.query?.quantity || 3
  const tasks = await getTaskFromStore(quantity)
  res.status(200)
  res.send(tasks)
})

app.put('/tasks', async (req, res) => {
  const taskUuid = req.body?.taskUuid
  console.log('Mark as done task with uuid: ', taskUuid)
  let task = taskStorage.find((task) => task.uuid === taskUuid)
  if (!task) {
    res.status(500)
    res.send('uuid not found')
  }
  console.log({ task })
  task.done = true
  res.status(200)
  res.send('done')
})

app.listen(3000, () => console.log(`Server started on http://localhost:3000`))
