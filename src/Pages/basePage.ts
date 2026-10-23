import { Locator, Page } from "@playwright/test";

export class BasePage{
protected readonly page:Page
protected readonly logo:Locator
protected readonly searchBox:Locator
protected readonly shoppingCart:Locator
protected readonly footer:Locator
protected readonly searchIcon:Locator

constructor(page:Page){
    this.page=page
    this.logo=page.getByAltText('naveenopencart')
    this.searchBox=page.getByRole('textbox',{"name":"Search"})
    this.shoppingCart=page.getByTitle('Shopping Cart')
    this.footer=page.locator('footer .list-unstyled li')
    this.searchIcon=page.locator('.input-group-btn')
}

async checkLogoVisibility():Promise<boolean>{
    return await (this.logo.isVisible())
}

async searchBoxVisibility():Promise<boolean>{
    return await (this.searchBox.isVisible())
}

async footerCount():Promise<number>{
    return await (this.footer.count())
}

async getPageTitle():Promise<string>{
   return (await this.page.title())
}

async getPageUrl(){
   return this.page.url()
}

async pause():Promise<void>{
    return await this.page.pause()
}


}