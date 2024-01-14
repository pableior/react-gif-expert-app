
import {useState} from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChanged = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;

        //setCategories(categories => [inputValue, ...categories]);
        setinputValue('');
        
        
        onNewCategory(inputValue.trim());


    }

    return (
        <form onSubmit={ (event) => onSubmit(event)} aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gifts"
                value= {inputValue}
                onChange={(event) => onInputChanged(event)}
            />
        </form>
    )
    
}


AddCategory.propTypes  = {
    onNewCategory: PropTypes.func.isRequired
}