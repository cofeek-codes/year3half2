import { useState } from "react"
import RootLayout from "../layouts/RootLayout"
import { TQuestion } from '../types/TQuestion.ts'


type TQuestionCreds = {
   
}


const NewQuestionPage = () => {
   const [question, setQuestion] = useState<TQuestionForm>()
   return <>
      <RootLayout>
         <div className="w-[720px] h-[562px] flex-col justify-start items-center gap-5 inline-flex">
            <div className="h-[562px] px-10 py-[30px] bg-white shadow flex-col justify-start items-start gap-5 flex">
               <div className="w-[640px] h-[34px] relative rounded-[5px] border-2 border-gray-200">
                  <div className="p-2.5 left-0 top-0 absolute justify-start items-center gap-2.5 inline-flex">
                     <div className="text-zinc-500 text-xs font-light font-['Roboto'] tracking-tight">Категория</div>
                  </div>
                  <div className="px-2.5 left-[596px] top-[5px] absolute justify-start items-center gap-2.5 inline-flex">
                     <div className="w-6 h-6 relative" />
                  </div>
               </div>
               <div className="w-[640px] h-[34px] relative rounded-[5px] border-2 border-gray-200">
                  <div className="p-2.5 left-0 top-0 absolute justify-start items-center gap-2.5 inline-flex">
                     <div className="text-zinc-500 text-xs font-light font-['Roboto'] tracking-tight">Заголовок</div>
                  </div>
               </div>
               <div className="w-[640px] h-[344px] relative rounded-[5px] border-2 border-gray-200">
                  <div className="p-2.5 left-0 top-0 absolute justify-start items-center gap-2.5 inline-flex">
                     <div className="text-zinc-500 text-xs font-light font-['Roboto'] tracking-tight">Опишите проблему или вопрос</div>
                  </div>
               </div>
               <div className="w-[640px] h-[30px] relative">
                  <div className="w-[241px] h-[30px] left-[399px] top-0 absolute">
                     <div className="w-[113px] h-[30px] px-5 py-3 left-0 top-0 absolute bg-gray-200 rounded-[5px] justify-start items-center gap-3 inline-flex">
                        <div className="text-zinc-500 text-xs font-normal font-['Roboto'] tracking-tight">Save as draft</div>
                     </div>
                     <div className="w-[108px] h-[30px] px-5 py-3 left-[133px] top-0 absolute opacity-50 bg-orange-500 rounded-[5px] justify-start items-center gap-3 inline-flex">
                        <div className="w-[13px] h-[13px] relative" />
                        <div className="text-white text-xs font-black font-['Roboto'] tracking-tight">Publish</div>
                     </div>
                  </div>
                  <div className="h-[30px] px-5 py-3 left-0 top-0 absolute opacity-80 bg-blue-500 rounded-[5px] justify-start items-center gap-3 inline-flex">
                     <div className="w-[13px] h-[13px] relative" />
                     <div className="text-white text-xs font-black font-['Roboto'] tracking-tight">Add Image</div>
                  </div>
               </div>
            </div>
         </div>
      </RootLayout>
   </>

}

export default NewQuestionPage

