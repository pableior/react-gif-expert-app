import {fireEvent, render,  screen} from  "@testing-library/react";

import { GifExpertApp } from "../src/GifExpertApp";

describe('Test on ', () => { 


    test('should add new category', () => { 

        const newCategory = 'Saitamaa';
        const {container} =  render(<GifExpertApp/>);
        screen.debug();

        // get input to fire input event
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');      
        

        fireEvent.input(input, { target: {value: newCategory}});
        fireEvent.submit(form);

        screen.debug();

        expect(screen.findAllByText(newCategory).catch.length).toBe(1);
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(2);


    });

    test('should appear', () => { 

        const newCategory = 'One Punch';
        const {container} =  render(<GifExpertApp/>);
        screen.debug();

        // get input to fire input event
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');      
        

        fireEvent.input(input, { target: {value: newCategory}});
        fireEvent.submit(form);

        screen.debug();
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);

    });


});