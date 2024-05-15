import { useState } from "react";
import RootLayout from "../layouts/RootLayout";
import { TQuestion } from '../types/TQuestion.ts';
import { v4 as uuid } from 'uuid'
import { useAuthStore } from "../store/authStore.ts";
import { useQuestionsStore } from "../store/questionsStore.ts";
import { useNavigate } from "react-router-dom";
type TQuestionCreds = {
   category: string,
   title: string,
   content: string
}

const NewQuestionPage = () => {
   const currentUser = useAuthStore(state => state.authedUser)
   const questions = useQuestionsStore(state => state.questions)
   const setQuestions = useQuestionsStore.getState().setQuestions
   const [questionCreds, setQuestionCreds] = useState<TQuestionCreds>({} as TQuestionCreds)
   const navigate = useNavigate()

   const addQuestion = (e: any) => {
      e.preventDefault()
      console.log("initial new question creds");
      console.log(questionCreds);

      let newQuestion: TQuestion = {
         id: uuid(),
         title: questionCreds.title,
         description: questionCreds.content,
         tags: questionCreds.category.split(', '),
         authorId: currentUser!.id,
         date: new Date().toLocaleString(),
         views: 0,
         comments: 0,
         upvotes: 0,
         answers: []
      }
      //@ts-ignore
      setQuestions([...questions, newQuestion])
      navigate('/')
   }

   return (
      <RootLayout>
         <div className="w-[720px] h-[562px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="h-[562px] px-10 py-[30px] bg-white shadow flex-col justify-start items-start gap-5 flex">
               <form className='newQuestion__form' onSubmit={addQuestion}>
                  <input
                     required
                     placeholder="Категория"
                     onChange={e => setQuestionCreds({ category: e.target.value, title: questionCreds.title, content: questionCreds?.content })}
                     className="w-[640px] h-[34px] relative rounded-[5px] border-2 border-gray-200"
                  />
                  <input
                     required
                     placeholder="Заголовок"
                     onChange={e => setQuestionCreds({ category: questionCreds.category, title: e.target.value, content: questionCreds?.content })}
                     className="w-[640px] h-[34px] relative rounded-[5px] border-2 border-gray-200"
                  />
                  <input
                     required
                     placeholder="Опишите проблему или вопрос"
                     onChange={e => setQuestionCreds({ category: questionCreds.category, title: questionCreds.title, content: e.target.value })}
                     className="w-[640px] h-[344px] relative rounded-[5px] border-2 border-gray-200"
                  />
                  <div className="w-[108px] h-[30px] px-5 py-3 bg-orange-500 rounded-[5px] justify-start items-center gap-3 inline-flex">
                     <button type="submit">
                        <div className="text-white text-xs font-black font-['Roboto'] tracking-tight">Опубликовать</div>
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </RootLayout>
   );
}

export default NewQuestionPage;
