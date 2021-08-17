import React from 'react';
import '../styles.css';
import { userSchema } from '../Validations/UserValidation';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";





class FormControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myFunction = this.myFunction.bind(this);
        this.input = React.createRef();
        this.email = React.createRef();
        this.passwd = React.createRef();
        this.confpasswd = React.createRef();
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let formData = {
            name: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            confpasswd: event.target[3].value,
        };
        const isValid = await userSchema.isValid(formData);
        console.log(isValid)
        console.log(userSchema)
        if (isValid) {
            document.getElementById("name").innerHTML = this.input.current.value;
            document.getElementById("email").innerHTML = this.email.current.value;
            document.getElementById("passwd").innerHTML = this.passwd.current.value;
            document.getElementById("confpasswd").innerHTML = this.confpasswd.current.value;
        }
        else {
            document.getElementById("name").innerHTML = "Invalid entry";
            document.getElementById("email").innerHTML = '';
            document.getElementById("passwd").innerHTML = '';
            document.getElementById("confpasswd").innerHTML = '';
        }
    }

    myFunction = (event) => {
        console.log('hello')
        this.input.current.value = '';
        this.email.current.value = '';
        this.passwd.current.value = '';
        this.confpasswd.current.value = '';
        document.getElementById("name").innerHTML = ' ';
        document.getElementById("email").innerHTML = ' ';
        document.getElementById("passwd").innerHTML = ' ';
        document.getElementById("confpasswd").innerHTML = ' ';
        event.preventDefault();
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit} >
                    <div className='form-style'>
                        <label>
                            Name:
                        </label>

                        <input type="text" ref={this.input}
                            placeholder='Enter name' />

                        <br />
                        <label>
                            Email
                        </label>

                        <input type="email" ref={this.email} className='input-style'
                            placeholder='info@greenbackend.com' />
                        <br />
                        <label>
                            Password
                        </label>

                        <input type="password" ref={this.passwd}
                            placeholder='Please enter a password of at least 6 digits' />

                        <br />
                        <label>
                            Confirm Password
                        </label>

                        <input type="password" ref={this.confpasswd}
                            placeholder='Please re-enter the password you entered' />
                    </div>
                    <input type="submit" value="Sign Up" className='input-submit' />
                    <button onClick={this.myFunction} className='input-submit'> Cancel</button>
                    <section className='info-card'>
                        <h3 id="name">name</h3>
                        <h3 id="email">email</h3>
                        <h3 id="passwd">passwd</h3>
                        <h3 id="confpasswd" >conf passwd</h3>
                    </section>
                </form >

            </section>
        );
    }

}

export default FormControl

//  class FormControl extends React.Component {
//      state = {
//          value: '',
//      }

//      handleChange = (e) => {
//          this.setState({ value: e.target.value}, () =>
//          this.props.onInputComplete(this.state.value))
//      }

//     submitHandler(e){
//         e.preventDefault();
//         console.log(this.state.value)
//     }

//     render() {
//         const { id, label, onInputComplete, ...restProps } = this.props
//         const { value } = this.state
//         return (
//             <div className='App'>
//                 <form>
//             <div className="formControl">
//                 <label htmlFor={id}>{label}</label>
//                 <input
//                 id={id}
//                 value={this.state.value}
//                 onChange={this.handleChange}
//                 type="email"
//                 id="fdcvcloe"
//                 label="email"
//                 {...restProps}
//                 />
//             </div>
//             </form>
//                 {value.trim().length > 0 ? (
//                 <output>the input value [{value}] updated.</output>
//                 ) : (
//                 <output>Waiting for input 
//                     <img src={loading} alt="" height={30}/>
//                 </output>
//                 )}
//             </div>

//         )
//     }
// }

// export default FormControl