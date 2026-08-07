import { expect, test } from '@playwright/test';

test('Check left menu options', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
    
    //Crea un localizador que agrupa todos los elementos de lista (listitem) dentro del contenedor que tiene la etiqueta "Sidepanel".
    const leftMenuItems = page.getByLabel('Sidepanel').getByRole('listitem')
    //Obtiene la cantidad de elementos de menú presentes en el panel lateral.
    const currentMenuItemsCount = await leftMenuItems.count();
    //Imprime en la consola la cantidad de elementos de menú presentes en el panel lateral.
    console.log('Current menu items count', currentMenuItemsCount)
    //Crea un array vacío para almacenar los textos de los elementos de menú presentes en el panel lateral.
    const currentMenuItems: string[] = []
    //Itera sobre cada elemento de menú presente en el panel lateral, obtiene su texto y lo agrega al array currentMenuItems.
    //Además, verifica que el primer elemento de menú sea "Admin".
    for (let i=0; i<currentMenuItemsCount; i++){
        //Obtiene el texto del elemento de menú en la posición i y lo almacena en la variable menuText.
        const menuText = await leftMenuItems.nth(i).innerText()
            //Si el índice i es igual a 0, verifica que el texto del primer elemento de menú sea "Admin".
            if (i===0){
                //Verifica que el texto del primer elemento de menú sea "Admin".
                expect(menuText.trim()).toEqual('Admin')            
        }
        //Agrega el texto del elemento de menú al array currentMenuItems.
        currentMenuItems.push(menuText)
     
    }
    //Imprime en la consola el array currentMenuItems que contiene los textos de los elementos de menú presentes en el panel lateral.
    console.log(currentMenuItems)
    //Crea un array expectedMenuItems que contiene los textos esperados de los elementos de menú presentes en el panel lateral.
    const expectedMenuItems = [
        'Admin',
        'PIM',
        'Leave',
        'Time',
        'Recruitment',
        'My Info',
        'Performance',
        'Dashboard',
        'Directory',
        'Maintenance',
        'Claim',
        'Buzz'
    ];
    //Verifica que el array currentMenuItems sea igual al array expectedMenuItems, asegurando que los elementos de menú presentes en el panel lateral coincidan con los elementos esperados.
    expect(currentMenuItems).toEqual(expectedMenuItems)
    
})