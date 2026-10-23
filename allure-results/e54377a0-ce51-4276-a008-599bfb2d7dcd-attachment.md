# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seamlessTransaction.spec.ts >> create multiple transaction
- Location: tests\seamlessTransaction.spec.ts:4:5

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('[name="quantityInput"]') resolved to 5 elements:
    1) <input min="0.01" max="9999" step="any" type="text" required="" decimals="2" focus-me="true" number-input="" vki-input-on="" select-on-focus="" vki_attached="true" name="quantityInput" data-ng-trim="false" data-ng-blur="onBlur()" data-ng-model="quantity" ng-virtual-keyboard="keyboardConfig" data-ng-keydown="onKeydown($event.keyCode)" class="ng-pristine ng-isolate-scope ng-invalid ng-invalid-required ng-empty ng-valid-pattern ng-valid-max ng-valid-min ng-valid-less-than ng-touched"/> aka getByRole('textbox', { name: 'Select Value' })
    2) <input readonly type="text" number-input="" name="quantityInput" data-ng-trim="false" data-cy="lineItemQuantityBox" data-ng-model="LineItemCtrl.quantity" data-ng-click="LineItemCtrl.changeQuantity(LineItemCtrl.item)" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-pattern ng-valid-max ng-valid-min ng-valid-less-than"/> aka locator('#item-0').getByRole('textbox')
    3) <input readonly type="text" number-input="" name="quantityInput" data-ng-trim="false" data-cy="lineItemQuantityBox" data-ng-model="LineItemCtrl.quantity" data-ng-click="LineItemCtrl.changeQuantity(LineItemCtrl.item)" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-pattern ng-valid-max ng-valid-min ng-valid-less-than"/> aka locator('#item-1 input[name="quantityInput"]')
    4) <input readonly type="text" number-input="" name="quantityInput" data-ng-trim="false" data-cy="lineItemQuantityBox" data-ng-model="LineItemCtrl.quantity" data-ng-click="LineItemCtrl.changeQuantity(LineItemCtrl.item)" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-pattern ng-valid-max ng-valid-min ng-valid-less-than"/> aka locator('#item-2 input[name="quantityInput"]')
    5) <input readonly type="text" number-input="" name="quantityInput" data-ng-trim="false" data-cy="lineItemQuantityBox" data-ng-model="LineItemCtrl.quantity" data-ng-click="LineItemCtrl.changeQuantity(LineItemCtrl.item)" class="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-pattern ng-valid-max ng-valid-min ng-valid-less-than"/> aka locator('#item-3 input[name="quantityInput"]')

Call log:
  - waiting for locator('[name="quantityInput"]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog:
    - generic [ref=e2]:
      - generic [ref=e3]:
        - heading "Verify quantity" [level=3] [ref=e5]
        - generic [ref=e7]:
          - paragraph [ref=e8]: ROADSTONE SOAPBAR BLOCK 100X440X100MM
          - paragraph [ref=e9]: Enter the volume in litre.
          - generic [ref=e12] [cursor=pointer]:
            - generic [ref=e13]: Select Value
            - textbox "Select Value" [active] [ref=e14]
        - generic [ref=e15]:
          - button "Cancel" [ref=e16] [cursor=pointer]
          - button "OK" [ref=e17] [cursor=pointer]
      - table [ref=e18]:
        - rowgroup [ref=e19]:
          - row [ref=e20]:
            - columnheader "Close" [ref=e21]:
              - strong [ref=e22] [cursor=pointer]:
                - generic [ref=e23]: Close
        - rowgroup [ref=e24]:
          - row [ref=e25]:
            - cell [ref=e26]:
              - table [ref=e27]:
                - row [ref=e28]:
                  - cell [ref=e29] [cursor=pointer]:
                    - generic [ref=e30]:
                      - generic:
                        - checkbox
                      - table [ref=e31]:
                        - rowgroup [ref=e32]:
                          - row [ref=e33]:
                            - cell "7" [ref=e34]
                            - cell "8" [ref=e35]
                            - cell "9" [ref=e36]
                            - cell "BkspNum" [ref=e37]
                      - table [ref=e38]:
                        - rowgroup [ref=e39]:
                          - row [ref=e40]:
                            - cell "4" [ref=e41]
                            - cell "5" [ref=e42]
                            - cell "6" [ref=e43]
                      - table [ref=e44]:
                        - rowgroup [ref=e45]:
                          - row [ref=e46]:
                            - cell "1" [ref=e47]
                            - cell "2" [ref=e48]
                            - cell "3" [ref=e49]
                            - cell "Enter" [ref=e50]
                      - table [ref=e51]:
                        - rowgroup [ref=e52]:
                          - row [ref=e53]:
                            - cell "0" [ref=e54]
                            - cell "." [ref=e55]
  - generic [ref=e58]:
    - banner [ref=e59]:
      - 'heading "Basket: 0004" [level=1] [ref=e60]'
      - navigation [ref=e61]:
        - list [ref=e62]:
          - listitem [ref=e63]:
            - button "Reprint" [ref=e64] [cursor=pointer]
            - list:
              - listitem:
                - button "Standard receipt"
              - listitem:
                - button "VAT receipt"
              - listitem:
                - button "VAT invoice"
          - listitem [ref=e66]:
            - button "Search" [ref=e67] [cursor=pointer]
            - list:
              - listitem:
                - generic: Customer
              - listitem:
                - generic: Transaction
          - listitem
    - generic [ref=e69]:
      - generic [ref=e70]:
        - heading [level=2] [ref=e71]
        - generic [ref=e74]:
          - generic [ref=e76]:
            - generic [ref=e78] [cursor=pointer]:
              - generic [ref=e80]: Search
              - textbox "Search" [disabled] [ref=e81]:
                - /placeholder: EAN, .com+ order, customer card or receipt
            - button "Search" [disabled]
          - generic [ref=e83]:
            - generic [ref=e85]:
              - generic [ref=e86]:
                - generic [ref=e87]:
                  - heading "73MM RHEAD CLASS B SINGLE BRICK" [level=3] [ref=e88]
                  - generic [ref=e89]:
                    - term [ref=e90]: "EAN:"
                    - definition [ref=e91]: "5063022504159"
                - generic [ref=e92]:
                  - term [ref=e93]: "Quantity:"
                  - definition [ref=e94]: x1
                - generic [ref=e95]:
                  - term [ref=e96]: "Unit Price:"
                  - definition [ref=e97]: £21.20
                  - term [ref=e98]: "Line Value:"
                  - definition [ref=e99]:
                    - strong [ref=e100]: £21.20
                - paragraph
              - generic [ref=e101]:
                - button "Delete" [ref=e102] [cursor=pointer]
                - button "Markdown" [ref=e103] [cursor=pointer]
                - button "Price override" [ref=e104] [cursor=pointer]
                - textbox [ref=e107]: "1"
            - generic [ref=e110]:
              - generic [ref=e111]:
                - heading "IG STEEL BOX LINTEL 100 1500MM" [level=3] [ref=e112]
                - generic [ref=e113]:
                  - term [ref=e114]: "EAN:"
                  - definition [ref=e115]: "5063022504081"
              - generic [ref=e116]:
                - term [ref=e117]: "Quantity:"
                - definition [ref=e118]: x1
                - term [ref=e119]: Warning
                - definition [ref=e120]:
                  - generic [ref=e121]: Over 25
              - generic [ref=e122]:
                - term [ref=e123]: "Unit Price:"
                - definition [ref=e124]: £0.89
                - term [ref=e125]: "Line Value:"
                - definition [ref=e126]:
                  - strong [ref=e127]: £0.89
              - paragraph
            - generic [ref=e130]:
              - generic [ref=e131]:
                - heading "DIALL 20MM GRAVEL LARGE" [level=3] [ref=e132]
                - generic [ref=e133]:
                  - term [ref=e134]: "EAN:"
                  - definition [ref=e135]: "5063022504012"
              - generic [ref=e136]:
                - term [ref=e137]: "Quantity:"
                - definition [ref=e138]: x1
              - generic [ref=e139]:
                - term [ref=e140]: "Unit Price:"
                - definition [ref=e141]: £4.00
                - term [ref=e142]: "Line Value:"
                - definition [ref=e143]:
                  - strong [ref=e144]: £4.00
              - paragraph
            - generic [ref=e147]:
              - generic [ref=e148]:
                - heading "SKIP17 HD FIRESTONE EPDM SHED ROOF KIT" [level=3] [ref=e149]
                - generic [ref=e150]:
                  - term [ref=e151]: "EAN:"
                  - definition [ref=e152]: "5063022503886"
              - generic [ref=e153]:
                - term [ref=e154]: "Quantity:"
                - definition [ref=e155]: x1
              - generic [ref=e156]:
                - term [ref=e157]: "Unit Price:"
                - definition [ref=e158]: £560.60
                - term [ref=e159]: "Line Value:"
                - definition [ref=e160]:
                  - strong [ref=e161]: £560.60
              - paragraph
        - generic [ref=e162]:
          - generic [ref=e163]:
            - heading "BASKET TOTALS" [level=2] [ref=e164]
            - generic [ref=e165]:
              - term [ref=e166]: Subtotal
              - definition [ref=e167]: £586.69
            - term [ref=e169]:
              - text: Promotion total
              - strong [ref=e170]: £0.00
            - generic [ref=e171]:
              - term [ref=e172]:
                - text: Discount total
                - strong [ref=e173]: £0.00
              - definition
            - generic [ref=e174]:
              - term [ref=e175]: VAT
              - definition [ref=e176]: £93.43
              - term [ref=e177]: Total (4 items)
              - definition [ref=e178]: £586.69
          - button "Proceed to checkout Next" [ref=e179] [cursor=pointer]:
            - text: Proceed to checkout
            - generic [ref=e180]: Next
      - complementary [ref=e181]:
        - heading "Basket functions" [level=2] [ref=e182]
        - button "Returns" [ref=e183] [cursor=pointer]
        - button "Layaway" [ref=e185] [cursor=pointer]
        - button "Gift card" [ref=e186] [cursor=pointer]
        - button "No sale" [ref=e187] [cursor=pointer]
        - button "Online catalogue" [ref=e189] [cursor=pointer]
        - button "Price enquiry" [ref=e190] [cursor=pointer]
        - button "Empty the basket" [ref=e191] [cursor=pointer]
        - time [ref=e193]:
          - strong [ref=e194]: 14:29
          - text: Thu, 15/10/2026
        - list [ref=e195]:
          - listitem [ref=e196]:
            - button "Settings" [ref=e197] [cursor=pointer]
          - listitem [ref=e198]:
            - button "Log Out" [ref=e199] [cursor=pointer]
      - complementary [ref=e200]:
        - generic [ref=e202]:
          - heading "Settings" [level=2] [ref=e204]
          - button "Close" [ref=e206] [cursor=pointer]
        - generic [ref=e207]:
          - heading "Details" [level=3] [ref=e208]
          - list [ref=e209]:
            - listitem [ref=e210]:
              - text: "User ID:"
              - strong [ref=e211]: manager03
            - listitem [ref=e212]:
              - text: "Register number:"
              - strong [ref=e213]: "18"
            - listitem [ref=e214]:
              - text: "User name:"
              - strong [ref=e215]: Manager Test
            - listitem [ref=e216]:
              - text: "Browser version:"
              - strong [ref=e217]: Chrome/153.0.8010.12
            - listitem [ref=e218]:
              - text: "Store ID:"
              - strong [ref=e219]: "1005"
            - listitem [ref=e220]:
              - text: "Application version:"
              - strong [ref=e221]: 8.1.40
            - listitem [ref=e222]:
              - text: "Device ID:"
              - strong [ref=e223]: "100518"
            - listitem [ref=e224]:
              - text: "UI version:"
              - strong [ref=e225]: 6.2.32-patch.0
        - group "Language" [ref=e226]:
          - list [ref=e228]:
            - listitem [ref=e229]:
              - radio [checked] [disabled]
              - generic [ref=e231]: English
            - listitem [ref=e232]:
              - radio [disabled]
              - generic [ref=e234]: French
            - listitem [ref=e235]:
              - radio [disabled]
              - generic [ref=e237]: Welsh
        - generic [ref=e238]:
          - button "Restart PED" [ref=e239] [cursor=pointer]
          - button "Generate Pin" [ref=e240] [cursor=pointer]
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
  9  |     await page.waitForTimeout(1000)
  10 |     if(await page.locator('[data-cy="emptyBasketBtn"]').isVisible()){
  11 |         console.log('Empty basket available')
  12 |         await page.locator('[data-cy="emptyBasketBtn"] span').click()
  13 |         await page.locator('[data-cy="reason1"]').click()
  14 |         await page.locator('[data-cy="confirmBtn"]').click()
  15 | 
  16 |     }
  17 |     await page.locator('[name="searchInput"]').fill('5063022503886')
  18 |     await page.keyboard.press('Enter')
  19 |     await page.locator('[name="searchInput"]').fill('5063022504012')
  20 |     await page.keyboard.press('Enter')
  21 |     await page.waitForTimeout(1000)
  22 |     await page.keyboard.press('Enter')
  23 |     await page.locator('[name="searchInput"]').fill('5063022504081')
  24 |     await page.keyboard.press('Enter')
  25 |     await page.locator('[data-cy="ageChallengedBtn"]').click()
  26 |     await page.locator('[name="searchInput"]').fill('5063022504159')
  27 |     await page.keyboard.press('Enter')
  28 |     await page.keyboard.press('Enter')
  29 |     await page.locator('[name="searchInput"]').fill('5063022504227')   
  30 |     await page.keyboard.press('Enter')
  31 |     await page.waitForTimeout(1000)
> 32 |     await page.locator('[name="quantityInput"]').fill('.99')
     |                                                  ^ Error: locator.fill: Error: strict mode violation: locator('[name="quantityInput"]') resolved to 5 elements:
  33 |     await page.keyboard.press('Enter')
  34 |     let randomNumber = Math.floor(Math.random() * 9000) + 1000;
  35 |     await page.locator('[data-cy="layawayButton"]').click()
  36 |     await page.locator('[name="layawayPin"]').fill(randomNumber.toString())
  37 |     await page.pause()
  38 | 
  39 |     
  40 |    
  41 |      
  42 | 
  43 |     
  44 | 
  45 | 
  46 | })
```