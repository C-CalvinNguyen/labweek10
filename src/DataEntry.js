import React, { Component } from 'react'

export default class DataEntry extends Component {
    provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
    'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 
    'Quebec', 'Saskatchewan']
    
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             name: "",
             address1: "",
             address2: "",
             city: "",
             province: "",
             posCode: "",
             checkbox: "",
             isSubmit: false,
        }
        this.readForm = this.readForm.bind(this);
    }

    readInput = e => {
        // Update state
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        
    }

    readForm = e => {
        e.preventDefault()
        this.setState({
            isSubmit: true
        })
    }
    
    
    render() {

        return (
            <div>
                <h1>Data Entry Form</h1>
                <form onSubmit={this.readForm}>
                    <label for='email'>Email</label>
                    <br/>
                    <input type='text' id='email' name='email' onChange={this.readInput}></input>

                    <br/>
                    <label for='name'>name</label>
                    <br/>
                    <input type='text' id='name' name='name' onChange={this.readInput}></input>

                    <br/>
                    <label for='address1'>Address</label>
                    <br/>
                    <input type='text' id='address1' name='address1' onChange={this.readInput}></input>

                    <br/>
                    <label for='address2'>Address2</label>
                    <br/>
                    <input type='text' id='address2' name='address2' onChange={this.readInput}></input>

                    <br/>
                    <label for='city'>City</label>
                    <br/>
                    <input type='text' id='city' name='city' onChange={this.readInput}></input>

                    <br/>
                    <label for='province'>Province</label>
                    <br/>
                    <select id='province' name='province' onChange={this.readInput}>
                        {
                            this.provinces.map(n=> (
                                <option value={n}>{n}</option>
                            ))
                        }
                    </select>

                    <br/>
                    <label for='posCode'>Postal Code</label>
                    <br/>
                    <input type='text' id='posCode' name='posCode' onChange={this.readInput}></input>
                    
                    <br/>
                    <input type='checkbox' required id='checkbox' name='checkbox' value='check' onChange={this.readInput}></input>
                    <label for='checkbox'>Agree Terms & Conditions?</label>

                    <br/>
                    <input type='submit' value='Submit'></input>
                </form>

                {this.state.isSubmit && <p>Email:  {this.state.email}</p>}
                {this.state.isSubmit && <p>Full Name:  {this.state.name}</p>}
                {this.state.isSubmit && <p>Address:  {this.state.address1}, {this.state.address2}</p>}
                {this.state.isSubmit && <p>City:  {this.state.city}</p>}
                {this.state.isSubmit && <p>Province:  {this.state.province}</p>}
                {this.state.isSubmit && <p>Postal Code:  {this.state.posCode}</p>}
            </div>
        )
    }
}
