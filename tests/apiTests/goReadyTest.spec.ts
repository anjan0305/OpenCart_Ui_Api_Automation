import {test,expect} from '../../src/fixtures/pageFixture'

let API_TOKEN={'Authorization':'Bearer 01d908e8c4fd1dca92c626905a4edbb23407a4f95b1fa2dad7da818874067c3a'}


test('get multiple users',async({request})=>{
let response=await request.get('https://gorest.co.in/public/v2/users',{
    headers:API_TOKEN
})
expect(response.status()).toBe(200)
expect(response.statusText()).toBe('OK')
console.log(await response.json())
})

test('get individual user data',async({request})=>{
   let response=await request.get('https://gorest.co.in/public/v2/users/8657031',{
        headers:API_TOKEN
    })

expect(response.status()).toBe(200)
expect(response.statusText()).toBe('OK')
console.log(await response.json())
})


test('Create a new user',async({request})=>{
   let response= await request.post('https://gorest.co.in/public/v2/users',{
        headers:API_TOKEN,
        data:{
        "name": `Anjan${Date.now()}`,
        "email": `Anjan${Date.now()}@gmail.com`,
        "gender": "male",
        "status": "active"
     }
    })

expect(response.status()).toBe(201)
expect(response.statusText()).toBe('Created')
console.log(await response.json())
})


test('Update an new user',async({request})=>{
   let createResponse=await request.post('https://gorest.co.in/public/v2/users',{
        headers:API_TOKEN,
        data:{
        "name": `Anjan${Date.now()}`,
        "email": `Anjan${Date.now()}@gmail.com`,
        "gender": "male",
        "status": "inactive"
     }
    })
   const responseObj=await createResponse.json()
   let user_id=responseObj.id
   let updateResponse=await request.put(`https://gorest.co.in/public/v2/users/${user_id}`,{
    headers:API_TOKEN,
    data:{
        "id": `${user_id}`,
        "name": 'Annie Mitra',
        "email": `Anjan_test${Date.now()}@gmail.com`,
        "gender": "male",
        "status": "inactive"
    }
})
console.log(await updateResponse.json())
expect(updateResponse.status()).toBe(200)
expect(updateResponse.statusText()).toBe('OK')

})


test('Patch an new user',async({request})=>{
   let createResponse=await request.post('https://gorest.co.in/public/v2/users',{
        headers:API_TOKEN,
        data:{
        "name": `Anjan${Date.now()}`,
        "email": `Anjan${Date.now()}@gmail.com`,
        "gender": "male",
        "status": "inactive"
     }
    })
   const responseObj=await createResponse.json()
   let user_id=responseObj.id
   let updateResponse=await request.patch(`https://gorest.co.in/public/v2/users/${user_id}`,{
    headers:API_TOKEN,
    data:{
         "name": 'Annie Mitra'
    }
})
console.log(await updateResponse.json())
expect(updateResponse.status()).toBe(200)
expect(updateResponse.statusText()).toBe('OK')

})


test('Delete an user',async({request})=>{
    let createResponse=await request.post('https://gorest.co.in/public/v2/users',{
        headers:API_TOKEN,
        data:{
        "name": `Anjan${Date.now()}`,
        "email": `Anjan${Date.now()}@gmail.com`,
        "gender": "male",
        "status": "inactive"
     },

    })
   const responseObj=await createResponse.json()
   let user_id=responseObj.id
   let deleteResponse=await request.delete(`https://gorest.co.in/public/v2/users/${user_id}`,{
    headers:API_TOKEN
   })
    
    expect(deleteResponse.status()).toBe(204)
    expect(deleteResponse.statusText()).toBe('No Content')

})


test('get user data using query parameter',async({request})=>{
   let response= await request.get('https://gorest.co.in/public/v2/users',{
        headers:API_TOKEN,
        params:{'name':'Mitra'}
    })
    console.log(await response.json())
})