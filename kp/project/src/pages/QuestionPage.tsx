import { useParams } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import Markdown from "react-markdown"
import { mockQuestions } from "../mock/mockQuestions"
import { Avatar } from "@chakra-ui/react"
import { mockUsers } from "../mock/MockUsers"

const QuestionPage = () => {
   const { id } = useParams()
   const question = mockQuestions.find(q => q.id == id)
   const author = mockUsers.find(u => u.id == question?.authorId)
   return <RootLayout>
      <div class="quesiton__wrapper">
         <div class="user__info">
            <div class="user__avatar">
               <Avatar name={author.name} src={author?.avatar} />
            </div>
            <div class="user__name">
               <div class="name">
                  {author.name}
               </div>
               <div class="time">
                  12.11.2023
               </div>
            </div>
         </div>
         <div class="question__info">
            <div class="question__title">
               {question.title}
            </div>
            <div class="question__description">
               <Markdown>
                  {question?.description}
               </Markdown>
            </div>
         </div>
         <div class="question__answers">
            {question?.answers.map((a) => (
               <div class="question__answer">
                  <div class="answer__user">
                     <div class="au__avatar">
                        <Avatar name={a.author.name} src={a.author.avatar} />
                     </div>
                     <div class="au__info">
                        <div class="au__name">{a.author.name}</div>
                        <div class="au__online">{a.time}</div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   </RootLayout >
}

export default QuestionPage
