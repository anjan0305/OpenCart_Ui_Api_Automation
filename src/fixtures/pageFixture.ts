//import test as base from the playwright/test module
import {test as base} from '@playwright/test'
import { LoginPage } from '../Pages/loginPage'
import { HomePage } from '../Pages/homePage';
import { CsvReader } from '../utilities/csvReader';
import { RegistrationPage } from '../Pages/registrationPage';
import { SearchPage } from '../Pages/searchPage';
import { ProductDetailsPage } from '../Pages/productDetailsPage';

// Create a custom type as pageFixtures and have all the types of pages that it should hold
type pageFixtures={
    loginPage:LoginPage;
    homePage:HomePage;
    registrationPage:RegistrationPage;
    searchPage:SearchPage;
    productDetailsPage:ProductDetailsPage
    loginData:Record<string,string>[];
}

// Modify the test to add the new pages in my custom fixtures
export const test=base.extend<pageFixtures>({
loginPage:async({page},use)=>{
    await use(new LoginPage(page))
} ,
homePage:async({page},use)=>{
    await use(new HomePage(page))
},
loginData:async({},use)=>{
    await use(CsvReader.readCsv('./src/testData/loginData.csv'))
} ,
registrationPage:async({page},use)=>{
    await use(new RegistrationPage(page))
},
searchPage:async({page},use)=>{
    await use (new SearchPage(page))
} ,
productDetailsPage:async({page},use)=>{
    await use (new ProductDetailsPage(page))
}

})

// exporting expect as we don't need seperate imports in our test
export {expect} from '@playwright/test'