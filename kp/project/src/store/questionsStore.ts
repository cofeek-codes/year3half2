import { create } from "zustand";
import { mockQuestions } from "../mock/mockQuestions";
import { TQuestion } from "../types/TQuestion";

type State = {
   questions: TQuestion[]
   setQuestions: (q: TQuestion[]) => void;
};


const initialState: Partial<State> = {
   questions: mockQuestions
};

export const useQuestionsStore = create<Partial<State>>((set) => ({
   ...initialState,
   setQuestions: (q: TQuestion[]) => {
      set(() => ({ questions: q }));
      console.log('[STORE]: Questions updated:', q);
   }
}))
