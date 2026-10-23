import { BasePage } from "./basePage";
import { Locator, Page } from "@playwright/test";

export class ProductDetailsPage extends BasePage{

private readonly productName:Locator
private readonly productImages:Locator
private readonly productMetaData:Locator
private readonly priceMetaData:Locator
private map:Map<string,string>


    constructor(page:Page){
    super(page)
    this.productName=page.locator('h1')
    this.productImages=page.locator('#content .thumbnails a')
    this.productMetaData=page.locator('.col-sm-4 ul:nth-of-type(1) li')
    this.priceMetaData=page.locator('.col-sm-4 ul:nth-of-type(2) li')
    this.map=new Map<string,string>()
}

async getProductDataViaObject():Promise<Record<string,string>>{
    const productObj:Record<string,string>={}
    productObj['itemHeader']=await this.getProductHeader()
    productObj['itemResult']=  String(await this.getProductImages())
    let allMetadata=await this.productMetaData.allInnerTexts()
    console.log(allMetadata)
    for (const data of allMetadata){
        let prodKey=data.split(':')[0].trim()
        let prodVal=data.split(':')[1].trim()
        console.log(`The key is ${prodKey} and value is ${prodVal}`)
        productObj[prodKey]=prodVal
    } 
    let priceArray=await this.priceMetaData.allInnerTexts()
      console.log(priceArray)
       productObj['price']=priceArray[0].trim()
       productObj['ExcludingTax']=priceArray[1].split('Ex Tax:')[1].trim()

    return productObj
  
    
}



async getProductDataViaMap():Promise<Map<string,string>>{
    this.map.set('itemHeader',await this.getProductHeader())
    this.map.set('itemResult',String(await this.getProductImages()))
    let allMetadata=await this.productMetaData.allInnerTexts()
    for (const data of allMetadata){
        let prodKey=data.split(':')[0].trim()
        let prodVal=data.split(':')[1].trim()
        this.map.set(prodKey,prodVal)
    } 
    let priceArray=await this.priceMetaData.allInnerTexts()
      this.map.set('price',priceArray[0].trim())
      this.map.set('ExcludingTax',priceArray[1].split('Ex Tax:')[1].trim())
      return this.map

}


async getProductHeader():Promise<string>{
    return await this.productName.innerText()
}

async getProductImages():Promise<number>{
    await this.productImages.last().waitFor({'state':'visible'})
    return await this.productImages.count()
}

async getProductMetaData():Promise<string[]>{
    return await this.productMetaData.allInnerTexts()
}

async getPriceMetaData():Promise<string[]>{
    return await this.priceMetaData.allInnerTexts()
}

}