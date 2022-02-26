import './component.css';
import rdv_logo from '../../assets/rdv_logo.png'
import user from '../../assets/user.png'

function navB(){
    return <nav>
        <img class="nav_logo" src={rdv_logo} height="28px" width="auto"/>
        <div class="nav-text">
        <p class="nav-up">IIT Delhi's</p>
                    <p class="nav-mid">Rendezvous</p>
                    <p class="nav-down">Campus Ambassador Program</p>
        </div>
        <form class="navbar-form" role="search">
        <div class="input-group">
        <div class="input-group-btn" style={{"color": 'white', "width": '40px', 'text-align': 'center', 'background-color': 'rgb(117, 121, 121)', 'border-radius': '5px'}}>
        <i class="glyphicon glyphicon-search" style={{width:'40px'}}></i>
        <input type="text" class="form-control" placeholder="Search" style={{width:'300%'}} name="srch-term" id="srch-term"></input>
        </div>
        </div>
        </form>
        <p class="nav-on">
                    On-going Tasks
                </p>

                <p class="nav-past">
                    Past Deadline
                </p>
                <i class="noti fa fa-bell"></i>

                <img className='nav-user' src={user} alt=""></img>
    </nav>
}

export default navB;