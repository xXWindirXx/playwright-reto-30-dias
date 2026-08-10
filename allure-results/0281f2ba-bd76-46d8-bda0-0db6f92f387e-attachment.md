# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigate through the left panel
- Location: tests\navigation.spec.ts:56:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Sidepanel').getByRole('listitem').nth(10)
  - operation was aborted: Test timeout of 30000ms exceeded.

```

# Page snapshot

```yaml
- generic [ref=f16e3]:
  - generic [ref=f16e5]:
    - heading "Administrator Access" [level=6] [ref=f16e6]
    - generic [ref=f16e7]: You have requested to access a critical Administrator function in OrangeHRM and are required to validate your credentials below
    - generic [ref=f16e10]:
      - generic [ref=f16e11]:
        - generic [ref=f16e12]: 
        - generic [ref=f16e13]: Username
      - textbox [disabled] [ref=f16e15]: Admin
    - generic [ref=f16e17]:
      - generic [ref=f16e18]:
        - generic [ref=f16e19]: 
        - generic [ref=f16e20]: Password
      - textbox [active] [ref=f16e22]
    - generic [ref=f16e23]:
      - button "Cancel" [ref=f16e24] [cursor=pointer]
      - button "Confirm" [ref=f16e25] [cursor=pointer]
  - generic [ref=f16e26]:
    - paragraph [ref=f16e27]: OrangeHRM OS 5.9
    - paragraph [ref=f16e28]:
      - text: © 2005 - 2026
      - link "OrangeHRM, Inc" [ref=f16e29] [cursor=pointer]:
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
  27 |                 expect(menuText.trim()).toEqual('Admin')            
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
  53 |     
  54 | })
  55 | 
  56 | test('Navigate through the left panel', async ({ page }) => {
  57 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  58 |     await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  59 |     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  60 |     await page.getByRole('button', { name: 'Login' }).click();
  61 | 
  62 |     await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
  63 |     
  64 |     //Crea un localizador que agrupa todos los elementos de lista (listitem) dentro del contenedor que tiene la etiqueta "Sidepanel".
  65 |     const leftMenuItems = page.getByLabel('Sidepanel').getByRole('listitem')
  66 |     //Obtiene la cantidad de elementos de menú presentes en el panel lateral.
  67 |     const currentMenuItemsCount = await leftMenuItems.count();
  68 |     //
  69 |     for (let i = 0; i < currentMenuItemsCount; i++) {
  70 |         //Obtiene el elemento de menú en la posición i y lo almacena en la variable menuitem.
  71 |         const menuitem = leftMenuItems.nth(i);
  72 |         //Obtiene el texto del elemento de menú en la posición i y lo almacena en la variable menuText.
> 73 |         const menuText = await menuitem.innerText();
     |                                         ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  74 |         //Imprime en la consola el texto del elemento de menú en la posición i.
  75 |         console.log('Current menu item', menuText);
  76 |         //Si el texto del elemento de menú no es "Maintenance", hace clic en el elemento de menú.
  77 |         if(menuText == 'Maintenance') {
  78 |             await page.goBack();
  79 |         //Hace clic en el elemento de menú en la posición i.
  80 |         
  81 |         }
  82 |         await menuitem.click();
  83 | 
  84 |     }
  85 | })
  86 | 
```