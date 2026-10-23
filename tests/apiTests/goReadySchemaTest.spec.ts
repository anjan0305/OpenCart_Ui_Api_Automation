import {test,expect} from '../../src/fixtures/apiFixture'
import Ajv from 'ajv'
import { userSchema,allUsersSchema } from '../../src/schemas'

const  AUTH_TOKEN={"Authorization":`${process.env.TOKEN!}`}


let ajv=new Ajv()

test('validate get user schema',async({apiHelper})=>{

let validator=ajv.compile(userSchema)
let getResponse=await apiHelper.get_request('public/v2/users/8666857',AUTH_TOKEN)
let schemaStatus=validator(await getResponse.json())
if(!schemaStatus){
console.log(validator.errors)
}
expect (schemaStatus).toBeTruthy()
})

test('validate all user schema',async({apiHelper})=>{
  let validator=ajv.compile(allUsersSchema)
  let getResponse=await apiHelper.get_request('public/v2/users',AUTH_TOKEN)
  let schemaStatus=validator(await getResponse.json())
  if (!schemaStatus){
    console.log(validator.errors)
  }
  expect(schemaStatus).toBeTruthy()
})