import {test,expect} from '../src/fixtures/pageFixture'

test.beforeEach(async({loginPage})=>{
    await loginPage.navigateToNaveenApplication();
    await loginPage.doLogin(process.env.USER_NAME!,process.env.PASSWORD!)
})

test('verify product details using object',async({homePage,searchPage,productDetailsPage})=>{
await homePage.searchProduct('Macbook')
await searchPage.selectProduct("MacBook Pro")
let obj1=await productDetailsPage.getProductDataViaObject()
expect.soft (obj1['itemHeader']).toBe('MacBook Pro')
expect.soft (obj1['itemResult']).toBe('4')
expect.soft (obj1['Brand']).toBe('Apple')
expect.soft (obj1['Product Code']).toBe('Product 18')
expect.soft (obj1['Reward Points']).toBe('800')
expect.soft (obj1['Availability']).toBe('Out Of Stock')
expect.soft (obj1['price']).toBe('$2,000.00')
expect.soft (obj1['ExcludingTax']).toBe('$2,000.00')
})


test('verify product details using map',async({homePage,searchPage,productDetailsPage})=>{
await homePage.searchProduct('Macbook')
await searchPage.selectProduct("MacBook Pro")
let map=await productDetailsPage.getProductDataViaMap()
console.log(map)
expect.soft (map.get('itemHeader')).toBe('MacBook Pro')
expect.soft (map.get('itemResult')).toBe('4')
expect.soft (map.get('Brand')).toBe('Apple')
expect.soft (map.get('Product Code')).toBe('Product 18')
expect.soft (map.get('Reward Points')).toBe('800')
expect.soft (map.get('Availability')).toBe('Out Of Stock')
expect.soft (map.get('price')).toBe('$2,000.00')
expect.soft (map.get('ExcludingTax')).toBe('$2,000.00')
})