import { TUser } from "../types/TUser";
import { images } from "../utils/imageLoader";
import { faker } from '@faker-js/faker'

export const mockUsers: TUser[] = [
   {
      id: 1,
      name: "Golanginya",
      avatar: images.Avatar1,
      lastOnline: "5 min ago",
      questionsIds: [1],
      email: faker.internet.email(),
      password: faker.internet.password()

   },

   {
      id: 2,
      name: "Linuxoid",
      avatar: images.Avatar3,
      lastOnline: "25 min ago",
      questionsIds: [2],
      email: faker.internet.email(),
      password: faker.internet.password()

   },

   {
      id: 3,
      name: "AizhanMaratovna",
      avatar: images.Avatar2,
      lastOnline: "2 days ago",
      questionsIds: [3],
      email: faker.internet.email(),
      password: faker.internet.password()

   },
]
