import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect'; 
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES =[
        {value:'general', label:'General'},
        {value:'business', label:'business'},
        {value:'entertainment', label:'entertainment'},
        {value:'health', label:'health'},
        {value:'science', label:'science'},
        {value:'sports', label:'sports'},
        {value:'technology', label:'technology'},

    ]

    // utilizar custom hook
    const [categoria, SelectNoticias]=useSelect('general', OPCIONES);

    //submit al form, pasar la categoria
    const buscarNoticias=e=>{
        e.preventDefault();
        guardarCategoria(categoria);
    };

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form
                onSubmit={buscarNoticias}
                >

                <h2 className={styles.heading}>Encuenra Noticias por Categoria</h2>
                <SelectNoticias/>
                <div className='input-field col s12'>
                    <input 
                    type='submit'
                    className={`${styles.btn_block} btn-large amber darken-2`}
                    value='Buscar'
                    />

                </div>
                </form>

            </div>

        </div>
     );
}
 
Formulario.propTypes={
    guardarCategoria:PropTypes.func.isRequired
  };
export default Formulario;