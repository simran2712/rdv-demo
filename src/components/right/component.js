import './component.css';
import user from "../../assets/user.png";

function right(){
    return <div class="right col-3">
        <div class="profile">
        <img className='up_user' src={user} ></img>
        </div>
        <div class="details">
        <p class="rec">Recent Activity</p>
        <div class="com-pro">
        <img src={user} className="down_user" alt=""></img>
        <div class="nav-text">
                                <p class="pro-up">You</p>
                                <p class="pro-down">Commented on this post</p>
                            </div>
        </div>
        <div class="comments">
                            <p class="comp"> Amazing Work!<br /> Keep it up!!</p>
                        </div>
        </div>
    </div>
}

export default right