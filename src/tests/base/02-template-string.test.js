
import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

 describe('Pruebas en 02-templete-string.js', () => {

    test('getSaludo debe retornar Hola y fernando', () => {

        const nombre = 'Fernando';
    
        const saludo = getSaludo(nombre);

        console.log(saludo);

        expect(saludo).toBe('Hola ' + nombre);

    })
    // debe de regresar Hola carlos si no hay argumento en el nombre

    test('debe de regresar Hola carlos si no hay argumento en el nombre ', () => {

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');

        console.log(saludo);



    })




})
