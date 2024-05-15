import { create } from "zustand";
import { TAnswer } from "../types/TComment";
import { mockQuestions } from "../mock/mockQuestions";

type State = {
   answers: TAnswer[];
   questionId: number;
   setAnswers: (answers: TAnswer[]) => void;
   setQuestionId: (id: string) => void;
};

const initialState: Partial<State> = {
   questionId: 0,
   answers: []
};

export const useAnswersStore = create<Partial<State>>((set) => ({
   ...initialState,
   setAnswers: (answers: TAnswer[]) => {
      set(() => ({ answers: answers }));
      console.log('[STORE]: Answers updated:', answers);
   },
   setQuestionId: (id: string) => {
      //@ts-ignore
      set(() => ({
         questionId: id,
         answers: mockQuestions[+id].answers
      }));
      console.log('[STORE]: questionId updated:', id);
   },
}));
