import { render } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => { 
    
    test('Debería hacer match con snapshot', () => { 

        const { container } = render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();
        
     })

 })