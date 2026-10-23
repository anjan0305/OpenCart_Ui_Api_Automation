import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    private readonly emailId:Locator;
    private readonly pwd:Locator;
    private readonly loginButton:Locator
    private readonly loginErrorText:Locator
    private readonly loginError:Locator
    private readonly registrationLink:Locator


  constructor(page:Page){
    super(page)
    this.emailId=page.getByRole('textbox',{name:'E-Mail Address'})
    this.pwd=page.getByRole('textbox',{name:'Password'})
    this.loginButton=page.getByRole('button',{name:'Login'})
    this.loginErrorText=page.locator('.alert.alert-danger.alert-dismissible')
    this.loginError=page.locator('.alert.alert-danger.alert-dismissible')
    this.registrationLink=page.getByRole('link',{"name":"Register"})
  }

  public async doLogin(username:string,password:string):Promise<void> {
    await this.emailId.fill(username)
    await this.pwd.fill(password)
    await this.loginButton.click()
}

async loginButtonStatus():Promise<boolean>{
    return await this.loginButton.isEnabled()
}

async navigateToNaveenApplication():Promise<void>{
    await this.page.goto('opencart/index.php?route=account/login%27')
}

async headerValidation():Promise<string>{
   return await this.page.title()
}

public async incorrectPwdError():Promise<string>{
    return (await this.loginErrorText.innerText())
}

public async loginErrorCheck():Promise<boolean>{
   return( await this.loginError.isVisible())
}

public async navigateToRegistrationPage():Promise<void>{
   return  await this.registrationLink.click()
}

}