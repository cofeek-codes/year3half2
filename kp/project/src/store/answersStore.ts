import { create } from "zustand";
import { TAnswer } from "../types/TComment";
import { mockQuestions } from "../mock/mockQuestions";

type State = {
   answers: TAnswer[];
   questionId: number;
   setAnswers: (answers: TAnswer[]) => void;
   setQuestionId: (id: number) => void;
};

const initialState: State = {
   questionId: 0,
   answers: []
};

export const useAnswersStore = create<State>((set) => ({
   ...initialState,
   setAnswers: (answers: TAnswer[]) => {
      set((state) => ({ answers: answers }));
      console.log('[STORE]: Answers updated:', answers);
   },
   setQuestionId: (id: number) => {
      set((state) => ({
         questionId: id,
         answers: mockQuestions[id].answers
      }));
      console.log('[STORE]: questionId updated:', id);
   },
}));
