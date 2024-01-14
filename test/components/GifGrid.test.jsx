import {render,  screen} from  "@testing-library/react";
import { GifGrid } from '../../src/components';
import {useFetchGifs} from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Test on GifGrid', () => { 
    
    const category = 'One Punch';
   
    test('should show loadinng', () => { 
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        expect(screen.getByText('Cargando...'));
    });



    test('should show items when images are loaded from useFetchGifs', () => {

        const gifs = [
            {
                id:'abc',
                title:'Saitama',
                url:  'https://saitama.com',
            },
            {
                id:'123',
                title:'goku',
                url:  'https://goku.com',
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={ category }/>);

        screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);

    });



    
});