
import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de heroes', () => {

    test('Debe de retornar un heroe por id ', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);


    });

    test('Debe de retornar undefined si la Heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);


    });

    test('Debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';  

        const claseHeroe = getHeroesByOwner(owner);

        const heroeDc = heroes.filter(heroe => heroe.owner === owner);

        expect(claseHeroe).toEqual(heroeDc);

    });

    test('Debe de retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';

        const claseHeroe = getHeroesByOwner(owner);

        // con esto vemos si vienen 2 elementos en el array 

        expect(claseHeroe.length).toBe(2);



    });



})
