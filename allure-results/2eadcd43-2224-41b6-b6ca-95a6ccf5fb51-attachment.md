# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seamlessTransaction.spec.ts >> create multiple transaction
- Location: tests\seamlessTransaction.spec.ts:4:5

# Error details

```
Test timeout of 15000ms exceeded.
```

```
Error: locator.click: Test timeout of 15000ms exceeded.
Call log:
  - waiting for locator('[data-cy="ageChallengedBtn"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - 'heading "Basket: 0003" [level=1] [ref=e5]'
    - navigation [ref=e6]:
      - list [ref=e7]:
        - listitem [ref=e8]:
          - button "Reprint" [ref=e9] [cursor=pointer]
          - list:
            - listitem:
              - button "Standard receipt"
            - listitem:
              - button "VAT invoice"
        - listitem [ref=e11]:
          - button "Search" [ref=e12] [cursor=pointer]
          - list:
            - listitem:
              - generic: Customer
            - listitem:
              - generic: Transaction
        - listitem
  - generic [ref=e14]:
    - generic [ref=e15]:
      - heading [level=2] [ref=e16]
      - generic [ref=e19]:
        - generic [ref=e21]:
          - generic [ref=e23] [cursor=pointer]:
            - generic [ref=e25]: Search
            - textbox "Search" [active] [ref=e26]:
              - /placeholder: EAN, .com+ order, customer card or receipt
          - button "Search" [ref=e27] [cursor=pointer]
        - generic [ref=e29]:
          - generic [ref=e31]:
            - generic [ref=e32]:
              - generic [ref=e33]:
                - heading "IG STEEL BOX LINTEL 100 1500MM" [level=3] [ref=e34]
                - generic [ref=e35]:
                  - term [ref=e36]: "EAN:"
                  - definition [ref=e37]: "5063022504081"
              - generic [ref=e38]:
                - term [ref=e39]: "Quantity:"
                - definition [ref=e40]: x3
                - term [ref=e41]: Warning
                - definition [ref=e42]:
                  - generic [ref=e43]: Over 25
              - generic [ref=e44]:
                - term [ref=e45]: "Unit Price:"
                - definition [ref=e46]: £0.89
                - term [ref=e47]: "Line Value:"
                - definition [ref=e48]:
                  - strong [ref=e49]: £2.67
              - paragraph
            - generic [ref=e50]:
              - button "Delete" [ref=e51] [cursor=pointer]
              - button "Markdown" [ref=e52] [cursor=pointer]
              - button "Price override" [ref=e53] [cursor=pointer]
              - textbox [ref=e56]: "3"
          - generic [ref=e59]:
            - generic [ref=e60]:
              - heading "DIALL 20MM GRAVEL LARGE" [level=3] [ref=e61]
              - generic [ref=e62]:
                - term [ref=e63]: "EAN:"
                - definition [ref=e64]: "5063022504012"
            - generic [ref=e65]:
              - term [ref=e66]: "Quantity:"
              - definition [ref=e67]: x3
            - generic [ref=e68]:
              - term [ref=e69]: "Unit Price:"
              - definition [ref=e70]: £4.00
              - term [ref=e71]: "Line Value:"
              - definition [ref=e72]:
                - strong [ref=e73]: £12.00
            - paragraph
          - generic [ref=e76]:
            - generic [ref=e77]:
              - heading "SKIP17 HD FIRESTONE EPDM SHED ROOF KIT" [level=3] [ref=e78]
              - generic [ref=e79]:
                - term [ref=e80]: "EAN:"
                - definition [ref=e81]: "5063022503886"
            - generic [ref=e82]:
              - term [ref=e83]: "Quantity:"
              - definition [ref=e84]: x3
            - generic [ref=e85]:
              - term [ref=e86]: "Unit Price:"
              - definition [ref=e87]: £560.60
              - term [ref=e88]: "Line Value:"
              - definition [ref=e89]:
                - strong [ref=e90]: £1,681.80
            - paragraph
          - generic [ref=e93]:
            - generic [ref=e94]:
              - heading "73MM RHEAD CLASS B SINGLE BRICK" [level=3] [ref=e95]
              - generic [ref=e96]:
                - term [ref=e97]: "EAN:"
                - definition [ref=e98]: "5063022504159"
            - generic [ref=e99]:
              - term [ref=e100]: "Quantity:"
              - definition [ref=e101]: x1
            - generic [ref=e102]:
              - term [ref=e103]: "Unit Price:"
              - definition [ref=e104]: £21.20
              - term [ref=e105]: "Line Value:"
              - definition [ref=e106]:
                - strong [ref=e107]: £21.20
            - paragraph
      - generic [ref=e108]:
        - generic [ref=e109]:
          - heading "BASKET TOTALS" [level=2] [ref=e110]
          - generic [ref=e111]:
            - term [ref=e112]: Subtotal
            - definition [ref=e113]: £1,717.67
          - generic [ref=e114]:
            - term [ref=e115] [cursor=pointer]:
              - text: Promotion total
              - strong [ref=e116]: "-£589.66"
            - definition:
              - generic [ref=e117]:
                - term [ref=e118]: 20% off WYS £1500
                - definition [ref=e119]: "-£343.54"
                - term [ref=e120]: 15% off WYS £1000
                - definition [ref=e121]: "-£206.12"
                - term [ref=e122]: £40 OFF WYS £700
                - definition [ref=e123]: "-£40.00"
          - generic [ref=e124]:
            - term [ref=e125]:
              - text: Discount total
              - strong [ref=e126]: £0.00
            - definition
          - generic [ref=e127]:
            - term [ref=e128]: VAT
            - definition [ref=e129]: £183.94
            - term [ref=e130]: Total (10 items)
            - definition [ref=e131]: £1,128.01
        - button "Proceed to checkout Next" [ref=e132] [cursor=pointer]:
          - text: Proceed to checkout
          - generic [ref=e133]: Next
    - complementary [ref=e134]:
      - heading "Basket functions" [level=2] [ref=e135]
      - button "Returns" [ref=e136] [cursor=pointer]
      - button "Layaway" [ref=e138] [cursor=pointer]
      - button "Gift card" [ref=e139] [cursor=pointer]
      - button "No sale" [ref=e140] [cursor=pointer]
      - button "Online catalogue" [ref=e142] [cursor=pointer]
      - button "Price enquiry" [ref=e143] [cursor=pointer]
      - button "Empty the basket" [ref=e144] [cursor=pointer]
      - time [ref=e146]:
        - strong [ref=e147]: 14:20
        - text: Thu, 15/10/2026
      - list [ref=e148]:
        - listitem [ref=e149]:
          - button "Settings" [ref=e150] [cursor=pointer]
        - listitem [ref=e151]:
          - button "Log Out" [ref=e152] [cursor=pointer]
    - complementary [ref=e153]:
      - generic [ref=e155]:
        - heading "Settings" [level=2] [ref=e157]
        - button "Close" [ref=e159] [cursor=pointer]
      - generic [ref=e160]:
        - heading "Details" [level=3] [ref=e161]
        - list [ref=e162]:
          - listitem [ref=e163]:
            - text: "User ID:"
            - strong [ref=e164]: manager03
          - listitem [ref=e165]:
            - text: "Register number:"
            - strong [ref=e166]: "18"
          - listitem [ref=e167]:
            - text: "User name:"
            - strong [ref=e168]: Manager Test
          - listitem [ref=e169]:
            - text: "Browser version:"
            - strong [ref=e170]: Chrome/153.0.8010.12
          - listitem [ref=e171]:
            - text: "Store ID:"
            - strong [ref=e172]: "1005"
          - listitem [ref=e173]:
            - text: "Application version:"
            - strong [ref=e174]: 8.1.40
          - listitem [ref=e175]:
            - text: "Device ID:"
            - strong [ref=e176]: "100518"
          - listitem [ref=e177]:
            - text: "UI version:"
            - strong [ref=e178]: 6.2.32-patch.0
      - group "Language" [ref=e179]:
        - list [ref=e181]:
          - listitem [ref=e182]:
            - radio [checked] [disabled]
            - generic [ref=e184]: English
          - listitem [ref=e185]:
            - radio [disabled]
            - generic [ref=e187]: French
          - listitem [ref=e188]:
            - radio [disabled]
            - generic [ref=e190]: Welsh
      - generic [ref=e191]:
        - button "Restart PED" [ref=e192] [cursor=pointer]
        - button "Generate Pin" [ref=e193] [cursor=pointer]
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
  9  |     if(await page.locator('[data-cy="emptyBasketBtn"]').isVisible()){
  10 |         console.log('Empty basket available')
  11 |         await page.locator('[data-cy="emptyBasketBtn"]').click()
  12 |     }
  13 |     await page.locator('[name="searchInput"]').fill('5063022503886')
  14 |     await page.keyboard.press('Enter')
  15 |     await page.locator('[name="searchInput"]').fill('5063022504012')
  16 |     await page.keyboard.press('Enter')
  17 |     await page.waitForTimeout(1000)
  18 |     await page.keyboard.press('Enter')
  19 |     await page.locator('[name="searchInput"]').fill('5063022504081')
  20 |     await page.keyboard.press('Enter')
> 21 |     await page.locator('[data-cy="ageChallengedBtn"]').click()
     |                                                        ^ Error: locator.click: Test timeout of 15000ms exceeded.
  22 |     await page.locator('[name="searchInput"]').fill('5063022504159')
  23 |     await page.keyboard.press('Enter')
  24 |     await page.keyboard.press('Enter')
  25 |     await page.locator('[name="searchInput"]').fill('5063022504227')   
  26 |     await page.keyboard.press('Enter')
  27 |     await page.waitForTimeout(1000)
  28 |     await page.locator('[name="quantityInput"]').fill('.99')
  29 |     await page.keyboard.press('Enter')
  30 |     let randomNumber = Math.floor(Math.random() * 9000) + 1000;
  31 |     await page.locator('[data-cy="layawayButton"]').click()
  32 |     await page.locator('[name="layawayPin"]').fill(randomNumber.toString())
  33 |     await page.pause()
  34 | 
  35 |     
  36 |    
  37 |      
  38 | 
  39 |     
  40 | 
  41 | 
  42 | })
```