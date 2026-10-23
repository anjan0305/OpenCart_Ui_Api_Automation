import {expect, test} from '../../src/fixtures/apiFixture'
import { ApiHelper } from '../../src/utilities/apiHelper'



const  AUTH_TOKEN={"Authorization":`${process.env.TOKEN}`}



test('get all users',async({apiHelper})=>{
let resp= await apiHelper.get_request('public/v2/users',AUTH_TOKEN)
//console.log(await resp.json())
expect(resp.status()).toBe(200)

})

test('create new user',async({apiHelper})=>{
let userBody={
  "name": "Anjan Mitra",
  "email": `Anjan${Date.now()}@gmail.com`,
  "gender": "male",
  "status": "active"
}

let resp=await apiHelper.post_request('public/v2/users',AUTH_TOKEN,userBody)
expect(resp.status()).toBe(201)
//console.log(await resp.json())
})

test('update an user',async({apiHelper})=>{
let userBody={
  "name": "Anjan Mitra",
  "email": `Anjan${Date.now()}@gmail.com`,
  "gender": "male",
  "status": "active"
}
let createResponse=await apiHelper.post_request('public/v2/users',AUTH_TOKEN,userBody)
let user_id=(await createResponse.json()).id
let updateUserBody={
  "name": "Anjan Update",
  "email": `Anjan${Date.now()}@gmail.com`,
  "gender": "male",
  "status": "active"
}
let updateResponse=await apiHelper.update_request(`public/v2/users/${user_id}`,AUTH_TOKEN,updateUserBody)
expect(updateResponse.status()).toBe(200)
expect((await updateResponse.json()).name).toBe('Anjan Update')
})


test('delete an user',async({apiHelper})=>{
  let userBody={
  "name": "Anjan Mitra",
  "email": `Anjan${Date.now()}@gmail.com`,
  "gender": "male",
  "status": "active"
}
let createResponse=await apiHelper.post_request('public/v2/users',AUTH_TOKEN,userBody)
let user_id=(await createResponse.json()).id
let deleteResponse=await apiHelper.delete_request(`public/v2/users/${user_id}`,AUTH_TOKEN)
expect(deleteResponse.status()).toBe(204)
deleteResponse=await apiHelper.delete_request(`public/v2/users/${user_id}`,AUTH_TOKEN)
expect(deleteResponse.status()).toBe(404)
})

test('get an individual user',async({apiHelper})=>{
  let userBody={
  "name": "Anjan Mitra",
  "email": `Anjan${Date.now()}@gmail.com`,
  "gender": "male",
  "status": "active"
}
let createResponse=await apiHelper.post_request('public/v2/users',AUTH_TOKEN,userBody)
let user_id=(await createResponse.json()).id
let queryParam={"name":"Anjan Mitra"}
let getResponse=await apiHelper.get_request('public/v2/users',AUTH_TOKEN,queryParam)
expect(getResponse.status()).toBe(200)
//console.log(await getResponse.json())
})
