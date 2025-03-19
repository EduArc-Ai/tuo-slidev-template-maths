import { defineAppSetup } from '@slidev/types'
import Question from './components/edu/Question.vue'
import Answer from './components/edu/Answer.vue'
import Example from './components/edu/Example.vue'
import Definition from './components/edu/Definition.vue'
import Theorem from './components/edu/Theorem.vue'
import Proof from './components/edu/Proof.vue'
import Note from './components/edu/Note.vue'

export default defineAppSetup(({ app }) => {
  // Register all educational components globally
  app.component('Question', Question)
  app.component('Answer', Answer)
  app.component('Example', Example)
  app.component('Definition', Definition)
  app.component('Theorem', Theorem)
  app.component('Proof', Proof)
  app.component('Note', Note)
}) 