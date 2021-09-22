
import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';


describe('pruebas del archvio 07 desestructuracion de array', () => {

    test('debe de retornar un array con un string y un numero', () => {

        const arr = retornaArreglo();//['ABC', 123]

        expect(arr).toEqual(['ABC', 123]);


    });

    test('desestructurar el arreglo y comprobar lo que viene en el array', () => {

        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');


    });


});
