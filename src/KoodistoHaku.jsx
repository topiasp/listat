import React from 'react';
import './KoodistoHaku.css';
import Search from  './Search';


//const Luokoodisto = (props) => {
class KoodistoHaku extends React.Component {
    constructor() {
        super();
    
    
        this.state = { 
            haettuTeksti: 'Boom'
           
          }
         ,   this.kasitteleHakuTekstinMuutos = this.kasitteleHakuTekstinMuutos.bind(this)
         ,   this.asetaAktiiviseksi = this.asetaAktiiviseksi.bind(this)
         
       
    }
    
    asetaAktiiviseksi(e) {

        /*
        this.setState({

            aktiivinen: true
        })

        console.log(e.target.classList)

        e.target.classList
        */
    }


    
    hiiriPaalla = function(e) {

       

       // console.log(e)
    }
    //haeTulokset(searchString) {
    kasitteleHakuTekstinMuutos(searchString) {

        console.log('Käsitellään',this.props)

        let kunnat = this.props.koodisto;
        
        var res =[];
        
        if (searchString.search('[A-Za-z]')===-1) {
          
          res = (kunnat.filter(function(x) {  return(  x.koodi.indexOf(searchString)>-1  )  }));
          
        }
        if (searchString.search('[A-Za-z]')>-1) {
          
          searchString = searchString.toLowerCase();
      
          res = (kunnat.filter(function(x) {  return(  x.selite.toLowerCase().indexOf(searchString)>-1  )  }));
          
        }
        if (searchString.search('[A-Za-z]')>-1 & searchString.search('[0-9]')>-1) {

            
          
            searchString = searchString.toLowerCase();
        
            res = (kunnat.filter(function(x) {  return( (x.koodi+' '+x.selite).toLowerCase().indexOf(searchString)>-1  )  }));
            
          }
        if (searchString === '*') {
          
          res = kunnat;
        }
        if (searchString.length===0) {
  
          res = [];
        }
        
        this.props.haeTulokset(res);   
    }

    


    
    render() {
        
        let luokkienNimet = 'koodisto-container'

        if (this.props.aktiivinen) {

            luokkienNimet+=' koodisto-aktiivinen';
        }

        return( 
            <div className= { luokkienNimet  }
                onMouseEnter={this.hiiriPaalla.bind(this)}
                onClick = { this.asetaAktiiviseksi }
                
                >
                <div className='koodisto-header'>
                    { this.props.nimi }
                </div>
                <Search
                    haettuTeksti={ this.props.haettuTeksti }
                    kasitteleHakutekstinMuutos={ this.kasitteleHakuTekstinMuutos }
                ></Search>
            </div>


        );
    }

}

export default KoodistoHaku;