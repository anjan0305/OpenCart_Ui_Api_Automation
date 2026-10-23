import {test as base} from '@playwright/test'
import { ApiHelper } from '../utilities/apiHelper'


type apiFixture={
    apiHelper:ApiHelper;
}

export const test=base.extend<apiFixture>({
    apiHelper: async({request},use)=>{
        await use(new ApiHelper(request,process.env.API_BASE_URL!))
    }
})

export {expect} from '@playwright/test' 