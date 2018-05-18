import React, { Component } from 'react';
import './../style/history.css';
import Zoom from 'react-reveal';

class history extends Component {
    render() {
        return (
            <div className="history" id="history">
                <div className="container-fluid">
                    <Zoom>
                    <h5><b>SEJARAH BANTEN</b></h5>
                    </Zoom>
                    <div className="panel-body">
                        <div className="col-lg-6"><br/>
                            <Zoom left>
                            <iframe style={{width:"550px",height:"370px"}} src="https://www.youtube.com/embed/ITXlQLM9twk" frameborder="0" allowfullscreen></iframe>
                            </Zoom>
                        </div>
                        <Zoom right>
                        <div className="sejarah col-lg-6">
                            <p>
                                Kesultanan Banten adalah sebuah kerajaan Islam yang pernah berdiri di Tatar Pasundan, 
                                Provinsi Banten, Indonesia. Berawal sekitar tahun 1526, ketika kesultanan Cirebon dan 
                                kesultanan Demak memperluas pengaruhnya ke kawasan pesisir barat Pulau Jawa, dengan 
                                menaklukan beberapa kawasan pelabuhan kemudian menjadikannya sebagai pangkalan militer 
                                serta kawasan perdagangan sebagai antisipasi terealisasinya perjanjian antara kerajaan 
                                Sunda dan Portugis tahun 1522 m.  Maulana Hasanuddin, putera Sunan Gunung Jati 
                                berperan dalam penaklukan tersebut. Setelah penaklukan tersebut, Maulana Hasanuddin 
                                mengembangkan benteng pertahanan yang dinamakan Surosowan menjadi 
                                kawasan kota pesisir yang kemudian hari menjadi pusat pemerintahan setelah Banten 
                                menjadi kesultanan yang berdiri sendiri. Kompleks istana Surosowan tersebut akhirnya selesai 
                                pada tahun 1526.[20] Pada tahun yang sama juga Arya Surajaya pucuk umum (penguasa) Wahanten 
                                Pasisir dengan sukarela menyerahkan kekuasannya atas wilayah Wahanten Pasisir kepada Sunan 
                                Gunung Jati, akhirnya kedua wilayah Wahanten Girang dan Wahanten Pasisir disatukan menjadi 
                                Wahanten yang kemudian disebut sebagai Banten dengan status sebagai depaten (provinsi) dari 
                                kesultanan Cirebon pada tanggal 1 Muharram 933 Hijriah (sekitar tanggal 8 Oktober 1526 m), 
                                kemudian Sunan Gunung Jati kembali ke kesultanan Cirebon dan pengurusan wilayah Banten 
                                diserahkan kepada Maulana Hasanuddin, dari kejadian tersebut sebagian ahli berpendapat bahwa 
                                Sunan Gunung Jati adalah Sultan pertama di Banten meskipun demikian Sunan Gunung Jati tidak 
                                mentasbihkan dirinya menjadi penguasa (sultan) di Banten Alasan-alasan demikianlah yang membuat 
                                pakar sejarah seperti Hoesein Djajadiningrat berpendapat bahwa Sunan Gunung Jatilah yang menjadi 
                                pendiri Banten dan bukannya Maulana Hasanuddin. Selama hampir 3 abad Kesultanan Banten mampu 
                                bertahan bahkan mencapai kejayaan yang luar biasa. 
                            </p>
                        </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        );
    }
}
export default history ;