import { mockQuestions } from '../../mock/MockQuestions'
import Question from './Question'

const QuestionsList = () => {
   return <>
      {mockQuestions.map((q) => (
         <Question key={q.id} question={q} />
      ))}

   </>
}

export default QuestionsList
