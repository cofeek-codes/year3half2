import { useParams } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import Markdown from "react-markdown"
import { mockQuestions } from "../mock/mockQuestions"
import { Avatar } from "@chakra-ui/react"
import { mockUsers } from "../mock/MockUsers"
import { images } from "../utils/imageLoader"

const QuestionPage = () => {
   const { id } = useParams()
   const question = mockQuestions.find(q => q.id == id)
   const author = mockUsers.find(u => u.id == question?.authorId)
   return <RootLayout>
      <div className="quesiton__wrapper">
         <div className="user__info">
            <div className="user__avatar">
               <Avatar name={author.name} src={author?.avatar} />
            </div>
            <div className="user__name">
               <div className="name">
                  @{author.name}
               </div>
               <div className="time">
                  {question.date}
               </div>
            </div>
         </div>
         <div className="question__info">
            <div className="question__title">
               {question.title}
            </div>
            <div className="question__description">
               <Markdown>
                  {question?.description}
               </Markdown>
            </div>
         </div>
         <div className="question__answer__form">
            <div className="question__answer__heading">Предложить Решение</div>
            <form>
               <input name="" type="text" placeholder="Type here your wise suggestion" />
               <div class="answer__form__buttons">
                  <button type="submit">Отправить</button>
                  <button type="clear">Очистить</button>
               </div>
            </form>
         </div>
         <div className="question__answers">
            {question?.answers.map((a, i) => (
               <div key={i} className="question__answer">
                  <div className="answer__user">
                     <div className="au__avatar">
                        <Avatar name={a.author.name} src={a.author.avatar} />
                     </div>
                     <div className="au__info">
                        <div className="au__name">@{a.author.name}</div>
                        <div className="au__online">{a.time}</div>
                     </div>
                  </div>
                  <div className="answer__content">
                     <Markdown>{a.content}</Markdown>
                  </div>
                  <div className="answer__rates">
                     <div className="likes">
                        <span className="likes__image">
                           <img alt="likes icon" src={images.Likes} />
                        </span>
                        <span className="likes__content">
                           {a.likes}
                        </span>
                     </div>
                     <div className="dislikes">
                        <span className="dislikes__image">
                           <img alt="dislikes icon" src={images.Dislikes} />
                        </span>
                        <span className="likes__content">
                           {a.dislikes}
                        </span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   </RootLayout>
}

export default QuestionPage
