import React, { Component } from 'react';
import './../style/Database.css';
import axios from 'axios';
import Zoom  from 'react-reveal';
import swal  from 'sweetalert';

class Database extends Component {
  constructor(){
    super();
    this.state={nama:'',alamat:'',tarif:'',wisata:'',gambar:'',deskripsi:'',destinasi:[]}
  }

  Input(){
    this.setState({
      nama     : this.refs.nama.value,
      alamat   : this.refs.alamat.value,
      tarif    : this.refs.tarif.value,
      wisata   : this.refs.wisata.value,
      gambar   : this.refs.gambar.value,
      deskripsi: this.refs.deskripsi.value
    });
  }

  Addsave(){
    var a = this.state.nama;
    var b = this.state.alamat;
    var c = this.state.tarif;
    var d = this.state.wisata;
    var e = this.state.gambar;
    var f = this.state.deskripsi;
    axios.post('https://aqueous-scrubland-39513.herokuapp.com/data',{
      nama      : a,
      alamat    : b,
      tarif     : c,
      wisata    : d,
      gambar    : e,
      deskripsi : f
    })
    swal({
      title: "Done",
      text: "Your data has been SAVED!",
      icon: "success",
      button: "Close",
    })
  }

  Find(){
    axios.get('https://aqueous-scrubland-39513.herokuapp.com/data')
    .then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
        destinasi: ambilData.data,
      })
    })
    swal({
      title: "Please wait!",
      button: "Close",
    })
  }

  Delete(){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        var a = this.state.nama;
        axios.delete('https://aqueous-scrubland-39513.herokuapp.com/data/'+a);
        console.log(a);
        setInterval(this.klik3(), 5000)
        swal("Poof! Your data has been DELETED!", {
          icon: "success",
        });
      } else {
        swal("Your data is safe!");
      }
    });
  }
  
  Update(){
    var a = this.state.nama;
    var b = this.state.alamat;
    var c = this.state.tarif;
    var d = this.state.wisata;
    var e = this.state.gambar;
    var f = this.state.deskripsi;
    axios.put('https://aqueous-scrubland-39513.herokuapp.com/data/'+a,{
      alamat    : b,
      tarif     : c,
      wisata    : d,
      gambar    : e,
      deskripsi : f
    });
    console.log(a);
    setInterval(this.klik3(),8000)
    swal({
      title: "Done",
      text: "Your data has been UPDATED!",
      icon: "success",
      button: "Close",
    })
  }
  
  render() {
    const data      = this.state.destinasi.map((item, index)=>{
      var nama      = [item.nama]
      var alamat    = [item.alamat]
      var tarif     = [item.tarif]
      var wisata    = [item.wisata]
      var gambar    = [item.gambar]
      var deskripsi = [item.deskripsi]
      return <tr key={index}><td>{nama}</td><td>{alamat}</td><td>{tarif}</td><td>{wisata}</td><td><img src={gambar} alt="ok"/></td><td>{deskripsi}</td></tr>;
    })
    return (
      <div className="Database">
      <center>
      <Zoom top>
      <h2>DATA WISATA BANTEN</h2>
      </Zoom>
        <div className="form">
            <Zoom bottom>
            <form>
              <input className="form-control" ref="nama"      type="text" placeholder="Nama Wisata"        onInput={()=>{this.Input();}} required />
              <input className="form-control" ref="alamat"    type="text" placeholder="Alamat Wisata"      onInput={()=>{this.Input();}} required />
              <input className="form-control" ref="tarif"     type="text" placeholder="Tarif Wisata"       onInput={()=>{this.Input();}} required />
              <input className="form-control" ref="wisata"    type="text" placeholder="Kategori Wisata"    onInput={()=>{this.Input();}} required />
              <input className="form-control" ref="gambar"    type="text" placeholder="Link Gambar Wisata" onInput={()=>{this.Input();}} required />
              <input className="form-control" ref="deskripsi" type="text" placeholder="Keterangan Wisata"  onInput={()=>{this.Input();}} required/><br/>
            </form>
            </Zoom>
              <button type="submit" className="btn btn-primary" onClick={()=>{this.Addsave();}}>ADD-SAVE</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="submit" className="btn btn-primary" onClick={()=>{this.Find();}}>   CHECK   </button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="submit" className="btn btn-primary" onClick={()=>{this.Delete();}}> DELETE  </button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="submit" className="btn btn-primary" onClick={()=>{this.Update();}}> UPDATE  </button>
        </div><br/>
      <tr className="tabel">
            <td>Nama Wisata</td>
            <td>Alamat Wisata</td>
            <td>Harga/Tarif Wisata</td>
            <td>Kategori Wisata</td>
            <td>Gambar Wisata</td>
            <td>Keterangan Wisata</td>
          </tr>
      {data}    
      </center>
      </div>
    );
  }
}

export default Database;

