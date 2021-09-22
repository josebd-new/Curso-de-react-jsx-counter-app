

import React from 'react';
import { shallow } from 'enzyme';
//import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <Primerapp />', () => {

    /*    test('debe de mostrar el mensaje Hola, soy Goku', () => {
    /*       const saludo = 'Hola, soy Goku';
             const { getByText } = render(<PrimeraApp saludo={saludo} />);
             expect(getByText(saludo)).toBeInTheDocument(); 
      }); */

    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Goku';

        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow(

            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />

        );

        // para encontrar el parrafo la p donde esta el subtitulo se haria  de esta manera
        //importante el .find y .text
        const textoParrafo = wrapper.find('p').text();

        console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);

    });

});
