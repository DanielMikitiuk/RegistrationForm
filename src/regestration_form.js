import './App.css'
import App from './test.js'
import React, { useState, useEffect } from 'react';

function ShowInfo() {
    return (
      <div className="App">
        <Info/>
      </div>
    );
  }
function Info(){
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('anonymously');

    const hendlerNickChange = (value) => {
        setName(value);
    }
    const hendlerAgeChange = (value) => {
        setAge(value);
        
    }
    const hendlerEmailChange = (value) => {
        setEmail(value);
    }

    const hendlerSexChange = (value) => {
        setSex(value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(name + " \n " + age + " \n " + email + " \n " + sex);
        
    }

    return(
        <div className='InfoForm'>
            <form onSubmit={handleSubmit}>
                <h1>Registration form</h1>
                <SetName onChange = {hendlerNickChange}/><br/>
                <SetAge onChange = {hendlerAgeChange}/><br/>
                <SetEmail onChange = {hendlerEmailChange}/><br/>
                <SetSex onChange = {hendlerSexChange}/><br/>

                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
    
}

function SetName(props){
    const [name, setName] = useState('');

    const hendlerNickChange = (event) => {
        setName(event.target.value);
        props.onChange(event.target.value);
    }
    return(
            <input type="text" placeholder="Nick" id="NickName" value={name} onChange={hendlerNickChange} required/>
    );
}
function SetAge(props){
    const [age, setAge] = useState('');

    const hendlerAgeChange = (event) => {
        if(event.target.value > -1 && event.target.value < 120){
            setAge(event.target.value);
            props.onChange(event.target.value);
        }
    }
    return(
            <input type="number" placeholder="Age" id="Age" value={age} onChange={hendlerAgeChange} required/>
    );


}
function SetEmail(props){
    const [email, setEmail] = useState('');
    const hendlerEmailChange = (event) => {
        setEmail(event.target.value);
        props.onChange(event.target.value);
    }
    return(
            <input type="email" placeholder="Email" id="Email" value={email} onChange={hendlerEmailChange} required/>
    );
}
function SetSex(props){
    const [sex, setSex] = React.useState('');
    const handlerSexChange = (event) => {
        setSex(event.target.value);
        props.onChange(event.target.value)
    }
    return(
        <div>
            <input type="radio" id="Sex1" 
            name="contact" value="Male" onChange={handlerSexChange} />
            <label>Male</label>

            <input type="radio" id="Sex2"
            name="contact" value="Female" onChange={handlerSexChange}/>
            <label >Female</label>
               
        </div>
    )
  }
  export default ShowInfo;