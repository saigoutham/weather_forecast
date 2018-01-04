import React, {Component} from 'react';
import {WeatherFetch} from '../actions/weather_fetch';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class SearchBar extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            term:''
        }
    }
    onInputChange(event)
    {
        this.setState({term:event.target.value});
    }
    onFormSubmit(event)
    {
        event.preventDefault();
        this.props.WeatherFetch(this.state.term);
        this.setState({term:''});
    }
    render()
    {
        return(
            <form onSubmit={(event)=>this.onFormSubmit(event)} className = "input-group">
                <input
                placeholder = "Type a city in India to get weather forecast!!"
                value =  {this.state.term}
                onChange = {(event)=>this.onInputChange(event)} 
                className = "form-control"/>
                <span className = "input-group-append">
                    <button className = "btn btn-info">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({WeatherFetch:WeatherFetch},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);