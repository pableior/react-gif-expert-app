import { fireEvent, render, screen} from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('test for component <AddCategory />', () => { 
    
    test('should change de vavlue of the text box.', () => { 
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value: 'Saitama'}} );
        expect(input.value).toBe('Saitama');
    });

    test('should call onNewCategory if input has a value', () => {
        const inputValue = 'Saitama';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value: {inputValue}}});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        


    });

    test('should not call onNewCategory if input has a value', () => {
        const inputValue = '';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);


        const form = screen.getByRole('form');

        fireEvent.submit(form);

        //expect(input.value).toBe('');

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        // expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        
    });

});