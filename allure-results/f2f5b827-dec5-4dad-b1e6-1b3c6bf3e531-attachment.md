# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTests\goReadySchemaTest.spec.ts >> validate get user schema
- Location: tests\apiTests\goReadySchemaTest.spec.ts:34:5

# Error details

```
Error: unknown format "email" ignored in schema at path "#/properties/email"
```

# Test source

```ts
  1  | import {test,expect} from '../../src/fixtures/apiFixture'
  2  | import Ajv from 'ajv'
  3  | 
  4  | const  AUTH_TOKEN={"Authorization":`${process.env.TOKEN}`}
  5  | let userSchema={
  6  |     "type": "object",
  7  |   "properties": {
  8  |     "id": {
  9  |       "type": "integer"
  10 |     },
  11 |     "name": {
  12 |       "type": "string"
  13 |     },
  14 |     "email": {
  15 |       "type": "string",
  16 |       "format": "email"
  17 |     },
  18 |     "gender": {
  19 |       "type": "string"
  20 |     },
  21 |     "status": {
  22 |       "type": "string"
  23 |     }
  24 |   },
  25 |   "required": [
  26 |     "id",
  27 |     "name",
  28 |     "email",
  29 |     "gender",
  30 |     "status"
  31 |   ]
  32 | }
  33 | 
  34 | test('validate get user schema',async({apiHelper})=>{
  35 | let ajv=new Ajv()
> 36 | let validator=ajv.compile(userSchema)
     |                   ^ Error: unknown format "email" ignored in schema at path "#/properties/email"
  37 | let getResponse=await apiHelper.get_request('public/v2/users/8666857',AUTH_TOKEN)
  38 | expect (validator(getResponse)).toBeTruthy()
  39 | 
  40 | 
  41 | })
```