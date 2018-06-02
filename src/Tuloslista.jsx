import React from 'react';
import './Tuloslista.css';



class Tuloslista extends React.Component {

    render() {

        let tulokset = this.props.tulokset;
        if (tulokset.length===0) {

            tulokset = [{ koodi: '',nimi:''}];
        }
        return( 
            <div className='tuloslista-container' >
                 <table className='tuloslista' >
                 <tbody>
                     <tr><th>Koodi</th><th>Selite</th></tr>
                    { tulokset.map(function(x) {  return(<Tulos selite={x.selite}  koodi={x.koodi} key={ x.koodi+x.selite }  ></Tulos>)      }) }
                    </tbody>
               </table>
            </div>
        );
    }

}


const Tulos = (props) => {


    return(<tr className="tuloslista-tulosrivi"><td>{ props.koodi }</td><td>{ props.selite }</td></tr>)
}



export default Tuloslista;