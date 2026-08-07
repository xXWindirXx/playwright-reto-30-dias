import { expect, test } from "@playwright/test";

test('Get all employee names', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();

    await page.getByRole('link', { name: 'Admin' }).click();

    await page.getByRole('navigation', { name: 'Topbar menu' }).getByText('User Management').click();
    await page.getByRole('menuitem', { name: 'Users' }).click();

    //Busca la tabla en la página y obtiene un localizador con todas las filas (row) que contiene.
    const rows = page.getByRole('table').getByRole('row');

    //Crea un arreglo vacío de cadenas de texto (string[]) llamado usernames para almacenar los datos que extraigas.
    const usernames: string[] = [];

    //Cuenta cuántas filas existen en total en la tabla y guarda ese número entero en rowCount.
    const rowCount = await rows.count();

    //Inicia un ciclo iterativo. Comienza en i = 1 para saltar la primera fila (los encabezados) y recorre hasta la última fila disponible (i < rowCount).
    for (let i = 1; i < rowCount; i++) {
        //Toma la fila i actual con .nth(i) y selecciona la segunda celda de esa fila (.nth(1), ya que la primera es índice 0).
        const cell = rows.nth(i).getByRole('cell').nth(3)
        //Extrae de forma asíncrona el contenido de texto que está dentro de esa celda y lo asigna a la variable username.
        const username = await cell.textContent()
        //Evalúa que username tenga un valor válido (es decir, qu la celda no haya retornado null o una cadena vacía).
        if (username) {
            //Agrega el nombre de usuario obtenido al final del arreglo usernames, .trim evita que se guarden cadenas vacias.
            usernames.push(username.trim())
            //Cierran la condición if   
        }
        //Cierra la estructura del ciclo for.      
    }
    // Imprime en la terminal la etiqueta de texto acompañada del arreglo completo con los usuarios recolectados.
    console.log('Usernames registrados: ', usernames);

})
