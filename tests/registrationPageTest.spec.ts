import {test,expect} from '../src/fixtures/pageFixture'
import { CsvReader } from '../src/utilities/csvReader'

for (let d of CsvReader.readCsv('./src/testData/registrationData.csv')){
test(`new user registration for ${d.firstName} and ${d.lastName} `,async({loginPage,registrationPage,page})=>{
    await loginPage.navigateToNaveenApplication()
    await loginPage.navigateToRegistrationPage()
    await registrationPage.fillRegistrationForm(d.firstName,d.lastName,d.email,d.telephone,d.pwd)
    await registrationPage.submitRegistrationDetails()
    expect(await registrationPage.getSuccessHeader()).toBe('Your Account Has Been Created!')
    expect(await registrationPage.getSuccessMessage()).toBe('Congratulations! Your new account has been successfully created!')
})

}

