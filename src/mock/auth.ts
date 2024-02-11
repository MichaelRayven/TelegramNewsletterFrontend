import { User } from "@/types"

export const login = (email: string, password: string, rememberSession: boolean): Promise<User> => {
  return new Promise(
    (resolve, reject) => {
      resolve(
        {
          "uid": "asfasdf",
          "username": "MichaelRayven",
          "photo_url": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/351095361/1800",
          "email": "themikerayven@gmail.com",
          "age": 45
        }
      )
    }
  )
}