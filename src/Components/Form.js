import React from 'react';
import './Css/Form.css'

class Form extends React.Component {

    render() {
        return(
            <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="Enter City..." />
            <button>submit</button>
            {this.props.error ? <h3 className="errorMessage">{this.props.error}</h3> : null}
        </form>);
    }

}

export default Form;