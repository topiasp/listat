

import React from 'react';




class Search extends React.Component {


    constructor() {
        super();

        this.hakutekstinMuuttuessa = this.hakutekstinMuuttuessa.bind(this);
        //this.kasitteleKlikkaus = this.kasitteleKlikkaus.bind(this);

       
    }
      
    hakutekstinMuuttuessa(e) {
        
        this.props.kasitteleHakutekstinMuutos(e.target.value)
    }

    kasitteleKlikkaus() {

        console.log('Klik:',this)
        

    }

// <div contentEditable="true" className='koodisto-userInput'>{ this.props.haettuTeksti }</div>
    render() {
        
        return( 
            <div className='koodisto-inputcontainer'>
                    
                  <input  type='text' className='koodisto-userInput'
                   
                   value={ this.props.haettuTeksti }
                   onChange={ this.hakutekstinMuuttuessa } ></input>
            </div>
        );
    }

}



export default Search;