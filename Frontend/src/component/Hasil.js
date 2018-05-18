import React, { Component } from 'react';
import './../style/Hasil.css';
import axios from 'axios';

class Hasil extends Component {
    constructor(){
      super();
      this.state={nama:'',
      destinasi:[]}
    }
  
    input(){
      this.setState(
        {nama: this.refs.cari.value}
      );
    }

    cari(){
      var x = this.state.nama;
      axios.get('https://aqueous-scrubland-39513.herokuapp.com/data/wisata/'+x)
      .then((ambilData)=>{
        console.log(ambilData.data);
        this.setState({
          destinasi: ambilData.data,
        })
      })
    }
    
    render() {
        const data = this.state.destinasi.map((item, index)=>{
            var nama      = [item.nama]
            var alamat    = [item.alamat]
            var tarif     = [item.tarif]
            var gambar    = [item.gambar]
            var deskripsi = [item.deskripsi]
            return <div className="row2">
                      <div className="col-lg-6">
                        <div className="panel panel-primary">
                            <div className="panel-body">
                              <center>
                              <img src={gambar} alt="ok"/>
                              <h6><b>" {nama} "</b></h6>
                              <p1>{deskripsi}</p1>
                              <table>
                              <tr><td><i className="fas fa-map-marker-alt"></i></td><td><b><p1>{alamat}</p1></b></td> 
                                  <td><i className="far fa-money-bill-alt"></i></td><td><b><p1>{tarif} </p1></b></td>
                              </tr>
                              </table>
                              </center>
                            </div>
                        </div>
                      </div>
                    </div>
          })
        return (
            <div className="Hasil">
              <center>
                <h1> Ke BANTEN ajaa . . . !</h1><br/>
                <p9>
                  <b>Silahkan pilih wisata apa yang anda inginkan.</b><br/>
                  <input className="Input" ref="cari" type="text" placeholder="Alam, Sejarah, Budaya, Kuliner ?" 
                    onInput={()=>{this.input();}} onKeyPress ={()=>{this.cari();}} required />
                  <button className="Button btn-primary" onClick={()=>{this.cari();}}><i className="fas fa-search"></i></button> 
                </p9>                       
              </center>
              <br/><br/>
              {data}
            </div>
        );
    }
}
export default Hasil ;