import './component.css';
import Nav from '../nav/component';
import Left from '../left/component';
import Right from '../right/component';

function Complete(){
    return <div class="container">
        <div className='container-fluid'>
        <Nav/>
        <div className='main'>
            <Left/>
            <Right/>
        </div>
        </div>
    </div>
}

export default Complete;