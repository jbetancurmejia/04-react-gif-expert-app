import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import GitExpertApp from '../GitExpertApp';


describe('Pruebas en componente <GitExpertApp/>', () => {
  
    test('debe mostrarse correctamente', () => {

        const wrapper = shallow( <GitExpertApp/> );
      expect( wrapper ).toMatchSnapshot();
    });


    test('debe de mostrar una lista de categorias', () => {

        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GitExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

        
    })

    
    
});
