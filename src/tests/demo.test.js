import '@testing-library/jest-dom';

// agrupador de tests
describe('Pruebas en el archivo demo.test.js', () => {

    //estos mensajes deben de decir lo que estamos probando
    test('deben de ser iguales los string', () => {

        // 1.inicialización
        const mensaje = 'Hola Mundo';
        // 2.estimulo
        const mensaje2 = `Hola Mundo`;
        // 3.Observar el comportamiento
        expect(mensaje).toBe(mensaje2); // ===

       
        
    })


});



