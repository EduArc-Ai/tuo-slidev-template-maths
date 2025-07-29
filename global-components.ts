import { defineAppSetup } from '@slidev/types'
import Question from './components/edu/Question.vue'
import Answer from './components/edu/Answer.vue'
import Example from './components/edu/Example.vue'
import Definition from './components/edu/Definition.vue'
import Theorem from './components/edu/Theorem.vue'
import Proof from './components/edu/Proof.vue'
import Note from './components/edu/Note.vue'
import LearningObjective from './components/edu/LearningObjective.vue'
import ClassQuestion from './components/edu/ClassQuestion.vue'
import Remark from './components/edu/Remark.vue'

export default defineAppSetup(({ app }) => {
  // Register all educational components globally
  app.component('Question', Question)
  app.component('Answer', Answer)
  app.component('Example', Example)
  app.component('Definition', Definition)
  app.component('Theorem', Theorem)
  app.component('Proof', Proof)
  app.component('Note', Note)
  app.component('LearningObjective', LearningObjective)
  app.component('ClassQuestion', ClassQuestion)
  app.component('Remark', Remark)
}) 