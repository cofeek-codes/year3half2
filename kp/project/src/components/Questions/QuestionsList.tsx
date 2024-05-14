import { mockQuestions } from '../../mock/mockQuestions'
import { useQuestionsStore } from '../../store/questionsStore'
import Question from './Question'

const QuestionsList = () => {
   const questions = useQuestionsStore(state => state.questions)
   return <>
      {questions.map((q) => (
         <Question key={q.id} question={q} />
      ))}

   </>
}

export default QuestionsList
