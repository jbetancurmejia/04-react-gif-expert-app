import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {


    const title="prueba";
    const url="http://prueba.com"
    const wrapper= shallow( <GifGridItem title={title} url={url} /> )
    
    test('debe de mostrar correctamente el componente', () => {

       expect ( wrapper ).toMatchSnapshot();

    });   
    


    test('debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe(title);

    });

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props().alt)
        expect( img.props().alt).toBe(title);
        expect( img.props().src).toBe(url);

    });

    test('Debe tener la clase animate__delay', () => {
      
        const div = wrapper.find('div');
        const className=  div.props().className;
        expect(className.includes('animate__animated')).toBe(true);
        //expect( img.props().src).toBe(url);
    });
    
    

});
