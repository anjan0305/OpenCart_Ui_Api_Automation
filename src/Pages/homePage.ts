import { Locator,Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {

private readonly header:Locator;

constructor(page:Page){
    super(page)
    this.header=page.locator('h2')
}

public async verifyHeadersList():Promise<string[]>{
  return await this.header.allInnerTexts()
}

public async homePageTitle():Promise<string>{
    return await this.page.title()
}

public async searchProduct(productName:string){
    await this.searchBox.fill(productName)
    await this.searchIcon.click()

}











}