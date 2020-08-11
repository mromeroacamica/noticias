import React,{Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


let apiKey = '49fc9a05c788417b8c21919ab90d78b8'


function App() {
  //definir la categoria y noticias
  const [categoria, guardarCategoria]=useState('');
  const [noticias, guardarNoticias]=useState([]);

  useEffect(()=>{

    const consultarAPI=async()=>{
      const url=`http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${apiKey}`;

      const respuesta = await fetch(url);
      const noticias =await respuesta.json();

      guardarNoticias(noticias.articles)
    };
    consultarAPI();
  },[categoria]);

  return (
    <Fragment>
      <Header
      titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario
        guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
        noticias={noticias}
        />
      </div>

    </Fragment>
  );
}

export default App;
