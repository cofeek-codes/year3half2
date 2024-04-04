import { Question } from "../types/Question";

export const mockQuestions: Question[] = [
   {
      id: 1,
      title: "How to patch KDE on FreeBSD?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
      tags: ['golang', 'linux', 'overflow'],
      authorId: 1,
      views: 125,
      comments: 15,
      upvotes: 155
   },
   {
      id: 2,
      title: "What is a difference between Java and JavaScript?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.",
      tags: ['java', 'javascript', 'difference'],
      authorId: 2,
      views: 158,
      comments: 25,
      upvotes: 150
   },
   {
      id: 3,
      title: "I want to study Svelte JS Framework. What is the best resourse should I use?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
      tags: ['svelte', 'javascript', 'recomendations'],
      authorId: 3,
      views: 250,
      comments: 30,
      upvotes: 45
   }

]
