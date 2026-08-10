# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Check left menu options
- Location: tests\navigation.spec.ts:3:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: "Admiin"
Received: "Admin"
```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: Carl user
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - button "" [ref=f4e133] [cursor=pointer]
  - generic [ref=f4e135]:
    - generic [ref=f4e137]:
      - generic [ref=f4e139]:
        - generic [ref=f4e141]:
          - generic [ref=f4e142]: 
          - paragraph [ref=f4e143]: Time at Work
        - separator [ref=f4e144]
      - generic [ref=f4e148]:
        - generic [ref=f4e150]:
          - generic [ref=f4e151]: 
          - paragraph [ref=f4e152]: My Actions
        - separator [ref=f4e153]
        - generic [ref=f4e155]:
          - img "No Content"
          - paragraph [ref=f4e156]: No Pending Actions to Perform
      - generic [ref=f4e158]:
        - generic [ref=f4e160]:
          - generic [ref=f4e161]: 
          - paragraph [ref=f4e162]: Quick Launch
        - separator [ref=f4e163]
      - generic [ref=f4e167]:
        - generic [ref=f4e169]:
          - generic [ref=f4e170]: 
          - paragraph [ref=f4e171]: Buzz Latest Posts
        - separator [ref=f4e172]
      - generic [ref=f4e176]:
        - generic [ref=f4e177]:
          - paragraph [ref=f4e182]: Employees on Leave Today
          - generic [ref=f4e183] [cursor=pointer]: 
        - separator [ref=f4e184]
      - generic [ref=f4e188]:
        - generic [ref=f4e190]:
          - generic [ref=f4e191]: 
          - paragraph [ref=f4e192]: Employee Distribution by Sub Unit
        - separator [ref=f4e193]
      - generic [ref=f4e197]:
        - generic [ref=f4e199]:
          - generic [ref=f4e200]: 
          - paragraph [ref=f4e201]: Employee Distribution by Location
        - separator [ref=f4e202]
    - generic [ref=f4e205]:
      - paragraph [ref=f4e206]: OrangeHRM OS 5.9
      - paragraph [ref=f4e207]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e208] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | 
  3  | test('Check left menu options', async ({ page }) => {
  4  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  5  |     await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  6  |     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  7  |     await page.getByRole('button', { name: 'Login' }).click();
  8  | 
  9  |     await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
  10 |     
  11 |     //Crea un localizador que agrupa todos los elementos de lista (listitem) dentro del contenedor que tiene la etiqueta "Sidepanel".
  12 |     const leftMenuItems = page.getByLabel('Sidepanel').getByRole('listitem')
  13 |     //Obtiene la cantidad de elementos de menú presentes en el panel lateral.
  14 |     const currentMenuItemsCount = await leftMenuItems.count();
  15 |     //Imprime en la consola la cantidad de elementos de menú presentes en el panel lateral.
  16 |     console.log('Current menu items count', currentMenuItemsCount)
  17 |     //Crea un array vacío para almacenar los textos de los elementos de menú presentes en el panel lateral.
  18 |     const currentMenuItems: string[] = []
  19 |     //Itera sobre cada elemento de menú presente en el panel lateral, obtiene su texto y lo agrega al array currentMenuItems.
  20 |     //Además, verifica que el primer elemento de menú sea "Admin".
  21 |     for (let i=0; i<currentMenuItemsCount; i++){
  22 |         //Obtiene el texto del elemento de menú en la posición i y lo almacena en la variable menuText.
  23 |         const menuText = await leftMenuItems.nth(i).innerText()
  24 |             //Si el índice i es igual a 0, verifica que el texto del primer elemento de menú sea "Admin".
  25 |             if (i===0){
  26 |                 //Verifica que el texto del primer elemento de menú sea "Admin".
> 27 |                 expect(menuText.trim()).toEqual('Admiin')            
     |                                         ^ Error: expect(received).toEqual(expected) // deep equality
  28 |         }
  29 |         //Agrega el texto del elemento de menú al array currentMenuItems.
  30 |         currentMenuItems.push(menuText)
  31 |      
  32 |     }
  33 |     //Imprime en la consola el array currentMenuItems que contiene los textos de los elementos de menú presentes en el panel lateral.
  34 |     console.log(currentMenuItems)
  35 |     //Crea un array expectedMenuItems que contiene los textos esperados de los elementos de menú presentes en el panel lateral.
  36 |     const expectedMenuItems = [
  37 |         'Admin',
  38 |         'PIM',
  39 |         'Leave',
  40 |         'Time',
  41 |         'Recruitment',
  42 |         'My Info',
  43 |         'Performance',
  44 |         'Dashboard',
  45 |         'Directory',
  46 |         'Maintenance',
  47 |         'Claim',
  48 |         'Buzz'
  49 |     ];
  50 |     //Verifica que el array currentMenuItems sea igual al array expectedMenuItems, asegurando que los elementos de menú presentes en el panel lateral coincidan con los elementos esperados.
  51 |     expect(currentMenuItems).toEqual(expectedMenuItems)
  52 |     
  53 | })
```