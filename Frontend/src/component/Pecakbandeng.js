import React, { Component } from 'react';
import axios from 'axios';

class Pecakbandeng extends Component {
    constructor(){
        super();
        this.state={destinasi:[]}
      }
    
      componentWillMount(){
        axios.get('https://aqueous-scrubland-39513.herokuapp.com/data/Pecak%20Bandeng')
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
            var wisata    = [item.wisata]
            var gambar    = [item.gambar]
            var deskripsi = [item.deskripsi]
            return <div className="row2"><br/><br/>
                      <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading" style={{height:"70px"}}>
                              <h7><b>Wisata {wisata}</b></h7>
                            </div>
                            <div className="panel-body">
                              <div className="col-lg-5">
                                <img src={gambar} alt="ok" style={{width:"400px",height:"250px"}}/>
                              </div>
                              <div className="col-lg-7">
                                <h6><b>{nama}</b></h6>
                                  <p1>{deskripsi}</p1>
                                <center>
                                  <table>
                                    <tr><td><i className="fas fa-map-marker-alt"></i></td><td><b><p1>{alamat}</p1></b></td></tr>
                                    <tr><td><i className="far fa-money-bill-alt"></i></td><td><b><p1>{tarif}</p1> </b></td></tr>
                                  </table>
                                </center>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
          })
        return (
            <div className="Hasil">
              {data}
            </div>
        );
    }
}
export default Pecakbandeng ;