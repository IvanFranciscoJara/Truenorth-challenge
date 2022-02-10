import { v4 as uuidv4 } from 'uuid'
import { loremIpsum, LoremIpsum } from 'lorem-ipsum'

const generateFakeData = () => {
  const randomQuantity = Math.floor(Math.random() * 35) + 1
  let tasks = []
  let randomWords
  for (let i = 0; i < randomQuantity; i++) {
    randomWords = Math.floor(Math.random() * 6) + 1
    tasks.push({ uuid: uuidv4(), title: loremIpsum({ count: randomWords, units: 'word' }) })
  }
  return tasks
}

export { generateFakeData }
