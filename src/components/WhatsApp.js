import React from 'react'

 class WhatsApp extends React.Component {
     state = {
         value: '',
     }

     handleChange = (e) => {
         this.setState({ value: e.target.value});
     }

    submitHandler = (e) => {
        e.preventDefault();
         console.log(this.state.value);
        // setInterval(() => {
        //     this.setState({
        //         redirectTimer: "loading"
        //     })
        // })
        // setTimeout(() =>{
            //window.location.href = `https://api.whatsapp.com/send/?phone=4699554208&text=${this.state.value}&app_absent=0`;
            window.location.href = `https://api.whatsapp.com/send/?phone=970599042502&text=${this.state.value}&app_absent=0`;
        // }, 3000)
    }

    render() {
        return (
            <div className='container'>
                <h1>WhatsApp Button</h1>
                <h5>Button that permits start a whatsApp chat with a custom number without save contact</h5>
                <label>Yopur Message</label>
                <form onSubmit={this.submitHandler}>
                <input
                value={this.state.value}
                onChange={this.handleChange}
                type="text"
                id="text"
                placeholder="Type your message here"
                />
                <button
                    type = 'submit'
                    id="submit">Open whatsApp chat
                </button>
            </form>
            </div>

        )
    }
}

export default WhatsApp