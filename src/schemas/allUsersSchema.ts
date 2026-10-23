import {userSchema} from '../schemas/userSchema'
export const allUsersSchema={
  "type": "array",
  "items": userSchema
}