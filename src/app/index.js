import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class Index extends Component{
    render()
    {
        return(
            <div>This is a starter package configured with react redux bootstrap4 and added custom style sheet too :}</div>
        );
    }
}

ReactDOM.render(<Index />,document.querySelector('.container'));