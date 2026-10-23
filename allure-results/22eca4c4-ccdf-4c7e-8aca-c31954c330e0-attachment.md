# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTests\goReadySchemaTest.spec.ts >> validate get user schema
- Location: tests\apiTests\goReadySchemaTest.spec.ts:10:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import {test,expect} from '../../src/fixtures/apiFixture'
  2  | import Ajv from 'ajv'
  3  | import { userSchema,allUsersSchema } from '../../src/schemas'
  4  | 
  5  | const  AUTH_TOKEN={"Authorization":`${process.env.TOKEN!}`}
  6  | 
  7  | 
  8  | let ajv=new Ajv()
  9  | 
  10 | test('validate get user schema',async({apiHelper})=>{
  11 | 
  12 | let validator=ajv.compile(userSchema)
  13 | let getResponse=await apiHelper.get_request('public/v2/users/8666857',AUTH_TOKEN)
  14 | let schemaStatus=validator(await getResponse.json())
  15 | if(!schemaStatus){
  16 | console.log(validator.errors)
  17 | }
> 18 | expect (schemaStatus).toBeTruthy()
     |                       ^ Error: expect(received).toBeTruthy()
  19 | })
  20 | 
  21 | test('validate all user schema',async({apiHelper})=>{
  22 |   let validator=ajv.compile(allUsersSchema)
  23 |   let getResponse=await apiHelper.get_request('public/v2/users',AUTH_TOKEN)
  24 |   let schemaStatus=validator(await getResponse.json())
  25 |   if (!schemaStatus){
  26 |     console.log(validator.errors)
  27 |   }
  28 |   expect(schemaStatus).toBeTruthy()
  29 | })
```