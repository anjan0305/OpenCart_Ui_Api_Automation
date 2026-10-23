import {Locator, Page} from '@playwright/test'
import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage{
 
    private readonly firstName:Locator;
    private readonly lastName:Locator;
    private readonly email:Locator;
    private readonly telephone:Locator;
    private readonly password:Locator;
    private readonly confirmPassowrd:Locator;
    private readonly privacyCheckbox:Locator;
    private readonly registrationSubmit:Locator;
    private readonly registrationSuccessHeader;
    private readonly registrationSuccessMessage;

    
    constructor(page:Page){
        super(page)
        this.firstName=page.getByRole('textbox',{"name":'First Name'})
        this.lastName=page.getByRole('textbox',{"name":'Last Name'})
        this.email=page.getByRole('textbox',{"name":'E-Mail'})
        this.telephone=page.getByRole('textbox',{"name":'Telephone'})
        this.password=page.getByPlaceholder('Password').first()
        this.confirmPassowrd=page.getByPlaceholder('Password Confirm')
        this.privacyCheckbox=page.getByRole('checkbox').first()
        this.registrationSubmit=page.getByRole('button',{"name":'Continue'})
        this.registrationSuccessHeader=page.locator('#content h1')
        this.registrationSuccessMessage=page.locator('#content p').first()

    }


    public async fillRegistrationForm(first:string,last:string,email:string,tel:string,pwd:string):Promise<void>{
        await this.firstName.fill(first)
        await this.lastName.fill(last)
        await this.email.fill(email)
        await this.telephone.fill(tel)
        await this.password.fill(pwd)
        await this.confirmPassowrd.fill(pwd)
        await this.privacyCheckbox.check()
    }

    public async submitRegistrationDetails():Promise<void>{
        await this.registrationSubmit.click()
    }

    public async getSuccessHeader():Promise<string>{
        return (await this.registrationSuccessHeader.innerText())
    }

        public async getSuccessMessage():Promise<string>{
        return (await this.registrationSuccessMessage.innerText())
    }

}