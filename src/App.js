import React, {Component, Fragment} from 'react';
import Header from './componets/Header';
import ListasNoticias from './componets/ListasNoticia';
import Formulario from './componets/formulario';
class App extends Component{
  state={
    noticias: []
  }

  componentDidMount(){
      this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general')=>{
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=2556e9f5aa524b7691e6cf30422786f8`
    const respuestas = await fetch(url);
    const noticias = await respuestas.json()
    console.log(noticias.articles);
    this.setState({
      noticias : noticias.articles
    })
  }

  render(){
    return(
      <Fragment>
        <Header titulo='Noticias REACT API'/>
        <div className='container white contenedor-noticias'>
            <Formulario consultarNoticias={this.consultarNoticias}/>
            <ListasNoticias noticias={this.state.noticias}/>
        </div>
      </Fragment>
    )
  }
}
export default App;
