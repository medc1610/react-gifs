import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');//siempre dejar como string vacio o 
                                                    //con algun valor o sino sera undefind 
    const handleInputchange = (e) => {
         setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
          setCategories(cats => [inputValue, ...cats]);
          setInputValue('');
        }     
    }

  return (   
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputchange}
        />
    </form>        
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}