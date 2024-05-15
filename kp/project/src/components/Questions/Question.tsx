import React from "react"
import { images } from "../../utils/imageLoader"
import { Link } from "react-router-dom"
import { useAuthStore } from "../../store/authStore"
import { TQuestion } from "../../types/TQuestion"
import Markdown from "react-markdown"

const Question = ({ question }: { question: TQuestion }) => {
   const registeredUsers = useAuthStore(state => state.registeredUsers)
   const user = registeredUsers!.find(u => u.id === question.authorId)!
   return <div className="question__wrapper">
      <Link to={`/question/${question.id}`}>
         <div className="px-[30px] py-[25px] bg-white rounded-[5px] shadow border border-gray-200 flex-col justify-start items-start gap-[15px] inline-flex mb-[23px]">
            <div className="w-[665px] h-10 relative">
               <div className="w-[71px] h-8 left-[55px] top-[4px] absolute">
                  <div className="left-0 top-[20px] absolute text-zinc-500 text-[10px] font-normal font-['Roboto'] tracking-wide">{user.lastOnline}</div>
                  <div className="question__title left-0 top-0 absolute text-black text-[13px] font-normal font-['Roboto']">{user.name}</div>
               </div>
               <img className="w-10 h-10 left-0 top-0 absolute rounded-full" src={user.avatar} />
               <div className="w-6 h-6 left-[641px] top-[8px] absolute" />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
               <div className="text-black text-sm font-bold font-['Roboto'] tracking-wide">{question.title}</div>
               <div className="question__description text-black text-sm font-light font-['Roboto'] leading-[25px] tracking-wide">
                  <Markdown>
                     {question.description}
                  </Markdown>
               </div>
            </div>
            <div className="h-[22px] relative bg-white">
               <div className=" justify-start items-center gap-2.5 inline-flex">
                  {question.tags.map((t, i) => (
                     <React.Fragment key={i}>
                        <div className="px-2.5 py-[5px] bg-gray-200 rounded-[5px] justify-start items-center flex">
                           <div className="text-zinc-500 text-[10px] font-normal font-['Roboto'] tracking-wide">{t}</div>
                        </div>
                     </React.Fragment>
                  ))}

               </div>
               <div className="question__stats left-[520px] top-[3px] absolute bg-white justify-start items-center gap-[15px] inline-flex">
                  <div className="w-[41px] h-[15px] relative flex items-center">
                     <img alt="" src={images.viewsIcon} />
                     <div className="text-zinc-500 text-[13px] font-normal font-['Roboto'] tracking-tight ml-[5px]">{question.views}</div>
                     <div className="w-[15px] h-[15px] left-0 top-0 absolute" />
                  </div>
                  <div className="w-[33px] h-[15px] relative flex items-center">
                     <img alt="" src={images.commentIcon} />
                     <div className="text-zinc-500 text-[13px] font-normal font-['Roboto'] tracking-tight ml-[5px]">{question.comments}</div>
                     <div className="w-[15px] h-[15px] left-0 top-0 absolute" />
                  </div>
                  <div className="w-[41px] h-[15px] relative flex items-center">
                     <img alt="" src={images.upvotesIcon} />
                     <div className="text-zinc-500 text-[13px] font-normal font-['Roboto'] tracking-tight ml-[5px]">{question.upvotes}</div>
                     <div className="w-[15px] h-[15px] left-0 top-0 absolute" />
                  </div>
               </div>
            </div>
         </div>
      </Link>
   </div>

}

export default Question
