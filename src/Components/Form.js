import React from 'react';
import './Css/Form.css'

class Form extends React.Component {

    render() {
        return(
            <form onSubmit={this.props.getWeather}>
            <input value={this.props.city} onChange={e => this.props.handleChange(e.target.value)} type="text" name="city" placeholder="Enter City..." />
            <button onClick={this.handleSubmit}>submit</button>
            {this.props.error ? <h3 className="errorMessage">{this.props.error}</h3> : null}
        </form>);
    }

}

export default Form;