import React from 'react';
import '../App.css';
// import {articlesData, data, stringData} from "../App";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            'id': Math.random(),
            'title': '',
            'body': ''
        }
    }
    handleChange = (e) => {
        this.setState({
            'id': Math.random(),
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
    }
    render() {
        return(
            <form className='w-50 mx-auto form'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Article title</label>
                    <input type="text" className="form-control" id="title" placeholder='title of article' onChange={this.handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Article body</label>
                    <textarea className="form-control" id="body" defaultValue='body of article' onChange={this.handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary"  onClick={this.handleSubmit}>add article</button>
            </form>
        )
    }
}









export default Form;