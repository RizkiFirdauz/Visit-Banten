import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route} from 'react-router-dom';
import Database     from './component/Database';
import history      from './component/history';
import Contact      from './component/Contact';
import Hasil        from './component/Hasil';
import Sawarna      from './component/Sawarna';
import Badak        from './component/Badak';
import Kaibon       from './component/Kaibon';
import Baduy        from './component/Baduy';
import Golok        from './component/Golok';
import Pecakbandeng from './component/Pecakbandeng';
import Header       from './component/Header';

ReactDOM.render(<BrowserRouter>
<div>
    <Header/>
    <Route exact path="/"                  component={App}/>
    <Route path="/Database"                component={Database}/>
    <Route path="/History"                 component={history}/>
    <Route path="/Contact"                 component={Contact}/>
    <Route path="/Pencarian"               component={Hasil}/>
    <Route path="/Sawarna"                 component={Sawarna}/>
    <Route path="/Tamannasionalujungkulon" component={Badak}/>
    <Route path="/Keratonkaibon"           component={Kaibon}/>
    <Route path="/Kampungbaduy"            component={Baduy}/>
    <Route path="/Golokciomas"             component={Golok}/>
    <Route path="/Pecakbandeng"            component={Pecakbandeng}/>
</div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
