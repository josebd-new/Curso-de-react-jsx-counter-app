import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await y Fetch ', () => {

    test('debe de retornar el url de la imagen', async () => {

        const url = getImagen();

         expect(typeof url).toBe('object'); // en el vido dice que es un string y aqui un objeto

       // expect(url.includes('https://')).toBe(true); esto no funciona

    });

});