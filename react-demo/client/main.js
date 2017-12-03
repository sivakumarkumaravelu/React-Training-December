import React from 'react';
import ReactDOM from 'react-dom';

//import PropsDemo from '../components/Propsdemo'
//import StatefulApp from '../components/StatefulApp'
import ChildParentInvoke from '../components/ChildParentInvoke'
import Twowaybinding from '../components/Twowaybinding'
import RefsApp from '../components/UsingRefs'
import ComponentLifeCycle from '../components/ComponentLifeCycle'


//import App from '../components/App';

//ReactDOM.render(<App/>, document.getElementById('app'));

//ReactDOM.render(<PropsDemo headerProp = "Siva technologies"/>, document.getElementById('app') )

//ReactDOM.render(<StatefulApp/>, document.getElementById('app') )

//ReactDOM.render(<ChildParentInvoke/>, document.getElementById('app') )

//ReactDOM.render(<Twowaybinding/>, document.getElementById('app') )

//ReactDOM.render(<RefsApp/>, document.getElementById('app') )

ReactDOM.render(<ComponentLifeCycle/>, document.getElementById('app') )
setTimeout(()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('app'))
}, 10000)


