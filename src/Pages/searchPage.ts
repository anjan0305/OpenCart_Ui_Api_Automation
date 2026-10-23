import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class SearchPage extends BasePage{
    private readonly productResult:Locator
    private readonly searchItems:Locator


    constructor(page:Page){
        super(page)
        this.productResult=page.locator('.product-thumb')
        this.searchItems=page.locator('.caption a')

    }

    async returnSearchResult():Promise<number>{
        return await this.productResult.count()
    }

    async selectProduct(productExactName:String){
        for (let loc of await this.searchItems.all()){
            if((await loc.innerText()).trim()===productExactName){
                await loc.click()
            }
        }
        
    }

    async getSearchResults():Promise<string[]>{
       return await this.searchItems.allInnerTexts()
    }







}