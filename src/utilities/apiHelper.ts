import { APIRequestContext, APIResponse } from "@playwright/test";



export class ApiHelper {

private readonly request:APIRequestContext
private readonly baseUrl:string    

constructor(request:APIRequestContext,baseUrl:string){
    this.request=request
    this.baseUrl=baseUrl
}

async get_request(endPoint:string,headersVal:Record<string,string>,queryParams?:Record<string,string>):Promise<APIResponse>{
    let getResponse=await this.request.get(this.baseUrl+endPoint,{
        headers:headersVal,
        params:queryParams
    })
    return getResponse
}

async post_request(endPoint:string,headersVal:Record<string,string>,dataJson:Record<string,string>):Promise<APIResponse>{
   let postResponse= await this.request.post(this.baseUrl+endPoint,{
        headers:headersVal,
        data:dataJson

    })
    return postResponse

}

async update_request(endpoint:string,headersVal:Record<string,string>,dataJson:Record<string,string>):Promise<APIResponse>{
    let updateResponse=await this.request.put(this.baseUrl+endpoint,{
        headers:headersVal,
        data:dataJson
    })
    return updateResponse

}

async delete_request(endPoint:string,headersVal:Record<string,string>):Promise<APIResponse>{
    let deleteResponse=await this.request.delete(this.baseUrl+endPoint,{
        headers:headersVal
    })
    return deleteResponse
}



}