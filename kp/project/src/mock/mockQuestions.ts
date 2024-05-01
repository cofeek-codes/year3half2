import { TQuestion } from "../types/TQuestion";
import { mockUsers } from "./MockUsers";


export const mockQuestions: TQuestion[] = [
   {
      id: 1,
      title: "How to patch KDE on FreeBSD?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
      tags: ['golang', 'linux', 'overflow'],
      authorId: 1,
      views: 125,
      comments: 15,
      upvotes: 155,
      answers: [
         {
            questionId: 1,
            author: mockUsers[1],
            content: "Lorem Ipsum",
            time: "12 November 2023",
            likes: 12,
            dislikes: 3
         },
         {
            questionId: 1,
            author: mockUsers[2],
            content: "Thanks!",
            time: "15 November 2023",
            likes: 256,
            dislikes: 45
         },
      ]
   },
   {
      id: 2,
      title: "What is a difference between Java and JavaScript?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.",
      tags: ['java', 'javascript', 'difference'],
      authorId: 2,
      views: 158,
      comments: 25,
      upvotes: 150,
      answers: [
         {
            questionId: 2,
            author: mockUsers[0],
            content: "Lorem Ipsum",
            time: "12 November 2023",
            likes: 12,
            dislikes: 3
         },
         {
            questionId: 1,
            author: mockUsers[0],
            content: "Some answer",
            time: "15 November 2023",
            likes: 1500,
            dislikes: 50
         },
      ]
   },
   {
      id: 3,
      title: "I want to study Svelte JS Framework. What is the best resourse should I use?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla",
      tags: ['svelte', 'javascript', 'recomendations'],
      authorId: 3,
      views: 250,
      comments: 30,
      upvotes: 45,
      answers: [
         {
            questionId: 3,
            author: mockUsers[1],
            content: "Lorem Ipsum",
            time: "12 November 2023",
            likes: 12,
            dislikes: 3
         },
         {
            questionId: 3,
            author: mockUsers[2],
            content: "Thanks!",
            time: "15 November 2023",
            likes: 256,
            dislikes: 45
         },
      ]
   }
];
