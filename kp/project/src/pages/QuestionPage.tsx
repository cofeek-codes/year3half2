import { useParams } from "react-router-dom"

const QuestionPage = () => {
   const { id } = useParams()
   return <>
      Question with id {id}
   </>
}

export default QuestionPage
