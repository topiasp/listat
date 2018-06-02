import React, { Component } from 'react';
import './App.css';

import KoodistoHaku from './KoodistoHaku'
import Tuloslista from './Tuloslista'



class App extends Component {

  
  constructor() {
    super();

    
    this.state = { 
        tulokset:  [{ koodi: '',selite:''}]
        ,aktiiviset: ['Kuntakoodit']
      
      }

      ,this.etsiTuloksista = this.etsiTuloksista
      ,this.haeTulokset = this.haeTulokset.bind(this)
   
  }
  
 


  haeTulokset(res) {

    this.setState({
        tulokset:    res
        //this.kasitteleHakutekstinMuutos(haettuTeksti)

    })

    
  }

  
  
  
  render() {

   
    
    
    let funktioTekstinMuutostaVarten =  this.haeTulokset;
    let aktiiviset = this.state.aktiiviset;
 
    return (

      <div className='container'>
        <div className='container-top'>
          { this.props.koodit.map(function(x) {  return(
            <KoodistoHaku
              nimi = {x.nimi} 
              key={ x.nimi.toString()}
              haeTulokset = { funktioTekstinMuutostaVarten  }  
              koodisto = { x.koodit }
              aktiivinen = { (function(n) { if (aktiiviset.indexOf(n)>-1) { return true } else { return false } })(x.nimi) }
            ></KoodistoHaku>)      
            
            }) }
        </div>
        <div className='container-bottom'>
          <Tuloslista tulokset = { this.state.tulokset  }></Tuloslista>
        </div>
      </div>
      
    );
  }
}

export default App;
