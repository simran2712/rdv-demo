import './component.css';
import Tasks from '../tasks/component';

function left(){
    return <div class="left col-sm-9 col-12">
        <div class="heading">
        <p class="head1">
                            You've got&nbsp;
                        </p>
                        <p class="head2">
                            7 tasks&nbsp;
                        </p>
                        <p class="head3">
                            today
                        </p>
        </div>
        <p class="left_on">On-going</p>
        <div class="vertical-menu">
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
        </div>
        {/* <br/> */}
        <p className='left_comp'>Completed</p>
        <div class="vertical-menu">
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
            <Tasks/>
        </div>
    </div>
}

export default left