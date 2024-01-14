import { findByAltText, render, screen } from '@testing-library/react';
import { GifItem } from "../../src/components/GifItem";

describe('Tests on <GifItem /> component', () => {


    const title = 'Imagen';
    const url = 'https://domain/path'
    
    test('must match to snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>);



        expect(container).toMatchSnapshot();
    });


    test(('must show  image with url and alternative value indicated'), () => {
        render(<GifItem title={ title } url = { url} />);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });


    test('mmust show title in component', () => { 
        render(<GifItem title={ title } url = { url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })



});