import {test,expect } from '../src/fixtures/pageFixture'

test.beforeEach('login to the application',async({loginPage})=>{
    await loginPage.navigateToNaveenApplication()
     await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)
})


test('verify succesfull login',async({loginPage,homePage})=>{
expect(await homePage.homePageTitle()).toBe('My Account')
})

test('verify page headers',async({loginPage,homePage})=>{
    expect(await homePage.verifyHeadersList()).toEqual(["My Account", "My Orders", "My Affiliate Account", "Newsletter"])

})