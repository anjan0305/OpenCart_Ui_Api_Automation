import {test,expect} from '../src/fixtures/pageFixture'
import { LoginPage } from '../src/Pages/loginPage'
import { CsvReader } from '../src/utilities/csvReader'
import { JsonReader } from '../src/utilities/jsonReader'


test('validate page title',async({loginPage})=>{
   await loginPage.navigateToNaveenApplication()
   expect(await loginPage.headerValidation()).toBe('Account Login')
})

test('test for incorrect login',async({loginPage})=>{
   await loginPage.navigateToNaveenApplication()
   await loginPage.doLogin('anja1n','xxxxx')
   expect(await loginPage.incorrectPwdError()).toContain('Warning: No match for E-Mail Address and/or Password.')
   
})

test('enability of login button',async({loginPage})=>{
   await loginPage.navigateToNaveenApplication()
   expect(loginPage.loginButtonStatus).toBeTruthy()

})

test('login error check',async({loginPage,loginData})=>{
   for (let data of loginData){
      await loginPage.navigateToNaveenApplication()
      await loginPage.doLogin(data.username,data.password)
      expect(await loginPage.loginErrorCheck()).toBeTruthy()

   }
})


let testData=CsvReader.readCsv('./src/testData/loginData.csv')
for (let data of testData){
   test(`login error check without the fixtures with ${data.username} and ${data.password}`,async({loginPage})=>{
      await loginPage.navigateToNaveenApplication()
      await loginPage.doLogin(data.username,data.password)
      expect(await loginPage.loginErrorCheck()).toBeTruthy()
   })

}

let jsonData=JsonReader.readJson('src/testData/loginData.json')
for (let data of jsonData){
   test(`login check with json data ${data.username} and ${data.password}`,async({loginPage})=>{
      await loginPage.navigateToNaveenApplication()
      await loginPage.doLogin(data.username,data.password)
      expect(await loginPage.loginErrorCheck()).toBeTruthy()


   })
}










