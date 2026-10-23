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
  - waiting for locator('.icon.icon-arrow-next')
    - locator resolved to <i class="icon icon-arrow-next"></i>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <td class="">u</td> from <table dir="ltr" cellspacing="5" class="keyboardInputMaster keyboardInputSize1">…</table> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <td class="">u</td> from <table dir="ltr" cellspacing="5" class="keyboardInputMaster keyboardInputSize1">…</table> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    26 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <td class="">u</td> from <table dir="ltr" cellspacing="5" class="keyboardInputMaster keyboardInputSize1">…</table> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - heading "Login" [level=2] [ref=e6]
      - generic [ref=e8] [cursor=pointer]:
        - generic [ref=e9]: User name
        - textbox "User name" [ref=e10]: manager03
      - generic [ref=e12] [cursor=pointer]:
        - generic [ref=e13]: Password
        - textbox "Password" [active] [ref=e14]: Posadmin@1
      - strong [ref=e16]: OR
      - generic [ref=e18] [cursor=pointer]:
        - generic [ref=e19]: PIN
        - textbox "PIN" [disabled] [ref=e20]
      - button "Login" [ref=e22] [cursor=pointer]
    - button "Price enquiry" [ref=e24] [cursor=pointer]
  - table [ref=e26]:
    - rowgroup [ref=e27]:
      - row [ref=e28]:
        - columnheader "Close" [ref=e29]:
          - strong [ref=e30] [cursor=pointer]:
            - generic [ref=e31]: Close
    - rowgroup [ref=e32]:
      - row [ref=e33]:
        - cell [ref=e34]:
          - table [ref=e35]:
            - row [ref=e36]:
              - cell [ref=e37] [cursor=pointer]:
                - generic [ref=e38]:
                  - generic:
                    - checkbox
                  - table [ref=e39]:
                    - rowgroup [ref=e40]:
                      - row [ref=e41]:
                        - cell "1" [ref=e42]
                        - cell "2" [ref=e43]
                        - cell "3" [ref=e44]
                        - cell "4" [ref=e45]
                        - cell "5" [ref=e46]
                        - cell "6" [ref=e47]
                        - cell "7" [ref=e48]
                        - cell "8" [ref=e49]
                        - cell "9" [ref=e50]
                        - cell "0" [ref=e51]
                  - table [ref=e52]:
                    - rowgroup [ref=e53]:
                      - row [ref=e54]:
                        - cell "q" [ref=e55]
                        - cell "w" [ref=e56]
                        - cell "e" [ref=e57]
                        - cell "r" [ref=e58]
                        - cell "t" [ref=e59]
                        - cell "y" [ref=e60]
                        - cell "u" [ref=e61]
                        - cell "i" [ref=e62]
                        - cell "o" [ref=e63]
                        - cell "p" [ref=e64]
                  - table [ref=e65]:
                    - rowgroup [ref=e66]:
                      - row [ref=e67]:
                        - cell "a" [ref=e68]
                        - cell "s" [ref=e69]
                        - cell "d" [ref=e70]
                        - cell "f" [ref=e71]
                        - cell "g" [ref=e72]
                        - cell "h" [ref=e73]
                        - cell "j" [ref=e74]
                        - cell "k" [ref=e75]
                        - cell "l" [ref=e76]
                  - table [ref=e77]:
                    - rowgroup [ref=e78]:
                      - row [ref=e79]:
                        - cell "Shift" [ref=e80]
                        - cell "z" [ref=e81]
                        - cell "x" [ref=e82]
                        - cell "c" [ref=e83]
                        - cell "v" [ref=e84]
                        - cell "b" [ref=e85]
                        - cell "n" [ref=e86]
                        - cell "m" [ref=e87]
                        - cell "Bksp" [ref=e88]
                  - table [ref=e89]:
                    - rowgroup [ref=e90]:
                      - row [ref=e91]:
                        - cell "#=+" [ref=e92]
                        - cell "@" [ref=e93]
                        - cell "]" [ref=e94]
                        - cell "." [ref=e95]
                        - cell "Enter" [ref=e96]
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
> 8  |     await page.locator('.icon.icon-arrow-next').click()
     |                                                 ^ Error: locator.click: Test timeout of 15000ms exceeded.
  9  |     await page.locator('"name":"searchInput"').fill('5063022503886')
  10 |     await page.keyboard.press('Enter')
  11 | 
  12 | 
  13 | })
```