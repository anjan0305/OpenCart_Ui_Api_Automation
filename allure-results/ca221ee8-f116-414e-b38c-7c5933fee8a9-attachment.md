# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seamlessTransaction.spec.ts >> create multiple transaction
- Location: tests\seamlessTransaction.spec.ts:4:5

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('[name="quantityInput"]') resolved to 4 elements:
    1) <input readonly type="text" number-input="" name="quantityInput" data-ng-trim="false" data-cy="lineItemQuantityBox" data-ng-model="LineItemCtrl.quantity" data-ng-click="LineItemCtrl.changeQuantity(LineItemCtrl.item)" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-pattern ng-valid-max ng-valid-min ng-valid-less-than"/> aka locator('#item-0').getByRole('textbox')
    2) <input readonly type="text" number-input="" name="quantityInput" data-ng-trim="false" data-cy="lineItemQuantityBox" data-ng-model="LineItemCtrl.quantity" data-ng-click="LineItemCtrl.changeQuantity(LineItemCtrl.item)" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-pattern ng-valid-max ng-valid-min ng-valid-less-than"/> aka locator('#item-1 input[name="quantityInput"]')
    3) <input readonly type="text" number-input="" name="quantityInput" data-ng-trim="false" data-cy="lineItemQuantityBox" data-ng-model="LineItemCtrl.quantity" data-ng-click="LineItemCtrl.changeQuantity(LineItemCtrl.item)" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-pattern ng-valid-max ng-valid-min ng-valid-less-than"/> aka locator('#item-2 input[name="quantityInput"]')
    4) <input readonly type="text" number-input="" name="quantityInput" data-ng-trim="false" data-cy="lineItemQuantityBox" data-ng-model="LineItemCtrl.quantity" data-ng-click="LineItemCtrl.changeQuantity(LineItemCtrl.item)" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-pattern ng-valid-max ng-valid-min ng-valid-less-than"/> aka locator('#item-3 input[name="quantityInput"]')

Call log:
  - waiting for locator('[name="quantityInput"]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog [active]:
    - generic [ref=e3]:
      - heading "Verify quantity" [level=3] [ref=e5]
      - generic [ref=e7]:
        - paragraph [ref=e8]: ROADSTONE SOAPBAR BLOCK 100X440X100MM
        - paragraph [ref=e9]: Enter the volume in litre.
        - generic [ref=e12] [cursor=pointer]:
          - generic [ref=e13]: Select Value
          - textbox "Select Value" [ref=e14]
      - generic [ref=e15]:
        - button "Cancel" [ref=e16] [cursor=pointer]
        - button "OK" [ref=e17] [cursor=pointer]
  - generic [ref=e20]:
    - banner [ref=e21]:
      - 'heading "Basket: 0003" [level=1] [ref=e22]'
      - navigation [ref=e23]:
        - list [ref=e24]:
          - listitem [ref=e25]:
            - button "Reprint" [ref=e26] [cursor=pointer]
            - list:
              - listitem:
                - button "Standard receipt"
              - listitem:
                - button "VAT receipt"
              - listitem:
                - button "VAT invoice"
          - listitem [ref=e28]:
            - button "Search" [ref=e29] [cursor=pointer]
            - list:
              - listitem:
                - generic: Customer
              - listitem:
                - generic: Transaction
          - listitem
    - generic [ref=e31]:
      - generic [ref=e32]:
        - heading [level=2] [ref=e33]
        - generic [ref=e36]:
          - generic [ref=e38]:
            - generic [ref=e40] [cursor=pointer]:
              - generic [ref=e42]: Search
              - textbox "Search" [disabled] [ref=e43]:
                - /placeholder: EAN, .com+ order, customer card or receipt
            - button "Search" [disabled]
          - generic [ref=e45]:
            - generic [ref=e47]:
              - generic [ref=e48]:
                - generic [ref=e49]:
                  - heading "73MM RHEAD CLASS B SINGLE BRICK" [level=3] [ref=e50]
                  - generic [ref=e51]:
                    - term [ref=e52]: "EAN:"
                    - definition [ref=e53]: "5063022504159"
                - generic [ref=e54]:
                  - term [ref=e55]: "Quantity:"
                  - definition [ref=e56]: x1
                - generic [ref=e57]:
                  - term [ref=e58]: "Unit Price:"
                  - definition [ref=e59]: £21.20
                  - term [ref=e60]: "Line Value:"
                  - definition [ref=e61]:
                    - strong [ref=e62]: £21.20
                - paragraph
              - generic [ref=e63]:
                - button "Delete" [ref=e64] [cursor=pointer]
                - button "Markdown" [ref=e65] [cursor=pointer]
                - button "Price override" [ref=e66] [cursor=pointer]
                - textbox [ref=e69]: "1"
            - generic [ref=e72]:
              - generic [ref=e73]:
                - heading "IG STEEL BOX LINTEL 100 1500MM" [level=3] [ref=e74]
                - generic [ref=e75]:
                  - term [ref=e76]: "EAN:"
                  - definition [ref=e77]: "5063022504081"
              - generic [ref=e78]:
                - term [ref=e79]: "Quantity:"
                - definition [ref=e80]: x1
                - term [ref=e81]: Warning
                - definition [ref=e82]:
                  - generic [ref=e83]: Over 25
              - generic [ref=e84]:
                - term [ref=e85]: "Unit Price:"
                - definition [ref=e86]: £0.89
                - term [ref=e87]: "Line Value:"
                - definition [ref=e88]:
                  - strong [ref=e89]: £0.89
              - paragraph
            - generic [ref=e92]:
              - generic [ref=e93]:
                - heading "DIALL 20MM GRAVEL LARGE" [level=3] [ref=e94]
                - generic [ref=e95]:
                  - term [ref=e96]: "EAN:"
                  - definition [ref=e97]: "5063022504012"
              - generic [ref=e98]:
                - term [ref=e99]: "Quantity:"
                - definition [ref=e100]: x1
              - generic [ref=e101]:
                - term [ref=e102]: "Unit Price:"
                - definition [ref=e103]: £4.00
                - term [ref=e104]: "Line Value:"
                - definition [ref=e105]:
                  - strong [ref=e106]: £4.00
              - paragraph
            - generic [ref=e109]:
              - generic [ref=e110]:
                - heading "SKIP17 HD FIRESTONE EPDM SHED ROOF KIT" [level=3] [ref=e111]
                - generic [ref=e112]:
                  - term [ref=e113]: "EAN:"
                  - definition [ref=e114]: "5063022503886"
              - generic [ref=e115]:
                - term [ref=e116]: "Quantity:"
                - definition [ref=e117]: x1
              - generic [ref=e118]:
                - term [ref=e119]: "Unit Price:"
                - definition [ref=e120]: £560.60
                - term [ref=e121]: "Line Value:"
                - definition [ref=e122]:
                  - strong [ref=e123]: £560.60
              - paragraph
        - generic [ref=e124]:
          - generic [ref=e125]:
            - heading "BASKET TOTALS" [level=2] [ref=e126]
            - generic [ref=e127]:
              - term [ref=e128]: Subtotal
              - definition [ref=e129]: £586.69
            - term [ref=e131]:
              - text: Promotion total
              - strong [ref=e132]: £0.00
            - generic [ref=e133]:
              - term [ref=e134]:
                - text: Discount total
                - strong [ref=e135]: £0.00
              - definition
            - generic [ref=e136]:
              - term [ref=e137]: VAT
              - definition [ref=e138]: £93.43
              - term [ref=e139]: Total (4 items)
              - definition [ref=e140]: £586.69
          - button "Proceed to checkout Next" [ref=e141] [cursor=pointer]:
            - text: Proceed to checkout
            - generic [ref=e142]: Next
      - complementary [ref=e143]:
        - heading "Basket functions" [level=2] [ref=e144]
        - button "Returns" [ref=e145] [cursor=pointer]
        - button "Layaway" [ref=e147] [cursor=pointer]
        - button "Gift card" [ref=e148] [cursor=pointer]
        - button "No sale" [ref=e149] [cursor=pointer]
        - button "Online catalogue" [ref=e151] [cursor=pointer]
        - button "Price enquiry" [ref=e152] [cursor=pointer]
        - button "Empty the basket" [ref=e153] [cursor=pointer]
        - time [ref=e155]:
          - strong [ref=e156]: 14:17
          - text: Thu, 15/10/2026
        - list [ref=e157]:
          - listitem [ref=e158]:
            - button "Settings" [ref=e159] [cursor=pointer]
          - listitem [ref=e160]:
            - button "Log Out" [ref=e161] [cursor=pointer]
      - complementary [ref=e162]:
        - generic [ref=e164]:
          - heading "Settings" [level=2] [ref=e166]
          - button "Close" [ref=e168] [cursor=pointer]
        - generic [ref=e169]:
          - heading "Details" [level=3] [ref=e170]
          - list [ref=e171]:
            - listitem [ref=e172]:
              - text: "User ID:"
              - strong [ref=e173]: manager03
            - listitem [ref=e174]:
              - text: "Register number:"
              - strong [ref=e175]: "18"
            - listitem [ref=e176]:
              - text: "User name:"
              - strong [ref=e177]: Manager Test
            - listitem [ref=e178]:
              - text: "Browser version:"
              - strong [ref=e179]: Chrome/153.0.8010.12
            - listitem [ref=e180]:
              - text: "Store ID:"
              - strong [ref=e181]: "1005"
            - listitem [ref=e182]:
              - text: "Application version:"
              - strong [ref=e183]: 8.1.40
            - listitem [ref=e184]:
              - text: "Device ID:"
              - strong [ref=e185]: "100518"
            - listitem [ref=e186]:
              - text: "UI version:"
              - strong [ref=e187]: 6.2.32-patch.0
        - group "Language" [ref=e188]:
          - list [ref=e190]:
            - listitem [ref=e191]:
              - radio [checked] [disabled]
              - generic [ref=e193]: English
            - listitem [ref=e194]:
              - radio [disabled]
              - generic [ref=e196]: French
            - listitem [ref=e197]:
              - radio [disabled]
              - generic [ref=e199]: Welsh
        - generic [ref=e200]:
          - button "Restart PED" [ref=e201] [cursor=pointer]
          - button "Generate Pin" [ref=e202] [cursor=pointer]
```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | 
  3  | 
  4  | test('create multiple transaction',async({page})=>{
  5  |     await page.goto('https://app7151.kg.kfplc.com:8443/spui/main/#/login')
  6  |     await page.locator('#lgUrn').fill('manager03')
  7  |     await page.locator('#lgPwd').fill('Posadmin@1')
  8  |     await page.keyboard.press('Enter')
  9  |     await page.locator('[name="searchInput"]').fill('5063022503886')
  10 |     await page.keyboard.press('Enter')
  11 |     await page.locator('[name="searchInput"]').fill('5063022504012')
  12 |     await page.keyboard.press('Enter')
  13 |     await page.waitForTimeout(1000)
  14 |     await page.keyboard.press('Enter')
  15 |     await page.locator('[name="searchInput"]').fill('5063022504081')
  16 |     await page.keyboard.press('Enter')
  17 |     await page.locator('[data-cy="ageChallengedBtn"]').click()
  18 |     await page.locator('[name="searchInput"]').fill('5063022504159')
  19 |     await page.keyboard.press('Enter')
  20 |     await page.keyboard.press('Enter')
  21 |     await page.locator('[name="searchInput"]').fill('5063022504227')   
  22 |     await page.keyboard.press('Enter')
> 23 |     await page.locator('[name="quantityInput"]').fill('.99')
     |                                                  ^ Error: locator.fill: Error: strict mode violation: locator('[name="quantityInput"]') resolved to 4 elements:
  24 |     await page.keyboard.press('Enter')
  25 |     let randomNumber = Math.floor(Math.random() * 9000) + 1000;
  26 |     await page.locator('[data-cy="layawayButton"]').click()
  27 |     await page.locator('[name="layawayPin"]').fill(randomNumber.toString())
  28 |     await page.pause()
  29 | 
  30 |     
  31 |    
  32 |      
  33 | 
  34 |     
  35 | 
  36 | 
  37 | })
```