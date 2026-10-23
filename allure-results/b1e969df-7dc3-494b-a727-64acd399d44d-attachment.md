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
Error: locator.fill: Test timeout of 15000ms exceeded.
Call log:
  - waiting for locator('text="name":"searchInput"')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - heading "Basket" [level=1] [ref=e5]
    - navigation [ref=e6]:
      - list [ref=e7]:
        - listitem
        - listitem [ref=e8]:
          - button "Search" [ref=e9] [cursor=pointer]
          - list:
            - listitem:
              - generic: Customer
            - listitem:
              - generic: Transaction
        - listitem
  - generic [ref=e11]:
    - generic [ref=e12]:
      - heading [level=2] [ref=e13]
      - generic [ref=e16]:
        - generic [ref=e18]:
          - generic [ref=e20] [cursor=pointer]:
            - generic [ref=e22]: Search
            - textbox "Search" [active] [ref=e23]:
              - /placeholder: EAN, .com+ order, customer card or receipt
          - button "Search" [ref=e24] [cursor=pointer]
        - paragraph [ref=e27]: No products have been added.
      - generic [ref=e29]:
        - heading "BASKET TOTALS" [level=2] [ref=e30]
        - generic [ref=e31]:
          - term [ref=e32]: Subtotal
          - definition [ref=e33]: £0.00
        - term [ref=e35]:
          - text: Promotion total
          - strong [ref=e36]: £0.00
        - generic [ref=e37]:
          - term [ref=e38]:
            - text: Discount total
            - strong [ref=e39]: £0.00
          - definition
        - generic [ref=e40]:
          - term [ref=e41]: VAT
          - definition [ref=e42]: £0.00
          - term [ref=e43]: Total (0 items)
          - definition [ref=e44]: £0.00
    - complementary [ref=e45]:
      - heading "Basket functions" [level=2] [ref=e46]
      - button "Returns" [ref=e47] [cursor=pointer]
      - button "Resume" [ref=e49] [cursor=pointer]
      - button "Gift card" [ref=e50] [cursor=pointer]
      - button "No sale" [ref=e51] [cursor=pointer]
      - button "Online catalogue" [ref=e53] [cursor=pointer]
      - button "Price enquiry" [ref=e54] [cursor=pointer]
      - time [ref=e56]:
        - strong [ref=e57]: 13:59
        - text: Thu, 15/10/2026
      - list [ref=e58]:
        - listitem [ref=e59]:
          - button "Settings" [ref=e60] [cursor=pointer]
        - listitem [ref=e61]:
          - button "Log Out" [ref=e62] [cursor=pointer]
    - complementary [ref=e63]:
      - generic [ref=e65]:
        - heading "Settings" [level=2] [ref=e67]
        - button "Close" [ref=e69] [cursor=pointer]
      - generic [ref=e70]:
        - heading "Details" [level=3] [ref=e71]
        - list [ref=e72]:
          - listitem [ref=e73]:
            - text: "User ID:"
            - strong [ref=e74]: manager03
          - listitem [ref=e75]:
            - text: "Register number:"
            - strong [ref=e76]: "18"
          - listitem [ref=e77]:
            - text: "User name:"
            - strong [ref=e78]: Manager Test
          - listitem [ref=e79]:
            - text: "Browser version:"
            - strong [ref=e80]: Chrome/153.0.8010.12
          - listitem [ref=e81]:
            - text: "Store ID:"
            - strong [ref=e82]: "1005"
          - listitem [ref=e83]:
            - text: "Application version:"
            - strong [ref=e84]: 8.1.40
          - listitem [ref=e85]:
            - text: "Device ID:"
            - strong [ref=e86]: "100518"
          - listitem [ref=e87]:
            - text: "UI version:"
            - strong [ref=e88]: 6.2.32-patch.0
      - group "Language" [ref=e89]:
        - list [ref=e91]:
          - listitem [ref=e92]:
            - radio [checked] [disabled]
            - generic [ref=e94]: English
          - listitem [ref=e95]:
            - radio [disabled]
            - generic [ref=e97]: French
          - listitem [ref=e98]:
            - radio [disabled]
            - generic [ref=e100]: Welsh
      - generic [ref=e101]:
        - button "Restart PED" [ref=e102] [cursor=pointer]
        - button "Generate Pin" [ref=e103] [cursor=pointer]
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
> 9  |     await page.locator('"name":"searchInput"').fill('5063022503886')
     |                                                ^ Error: locator.fill: Test timeout of 15000ms exceeded.
  10 |     await page.keyboard.press('Enter')
  11 | 
  12 | 
  13 | })
```