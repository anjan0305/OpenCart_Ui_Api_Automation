import {test,expect} from '../src/fixtures/pageFixture'
import { ProductDetailsPage } from '../src/Pages/productDetailsPage'

test.beforeEach(async({loginPage})=>{
await loginPage.navigateToNaveenApplication()
await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)
})

test('verify the product search functionality',async({homePage,searchPage})=>{
await homePage.searchProduct('Macbook')
await searchPage.selectProduct("MacBook Pro")
await searchPage.pause()
})

test('verify search page features',async({homePage,searchPage})=>{
    await homePage.searchProduct('Macbook')
    expect(await searchPage.returnSearchResult()).toBe(3)
})

test('verify search page items',async({homePage,searchPage})=>{
    await homePage.searchProduct('Macbook')
    expect(await searchPage.getSearchResults()).toEqual([ 'MacBook', 'MacBook Air', 'MacBook Pro' ])
    
})

