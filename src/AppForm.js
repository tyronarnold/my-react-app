import React from 'react'
import "./styles.css"
import FormControl from './components/FormControl'

 function AppForm () {

    const [input, setImnput] = React.useState('')
        return (
            <div className="App" >
                <h1> React Form Controls</h1>
                <FormControl 
                type="email"
                id="fdkcvcloe"
                label="email"
                placeholder="info@greenbackend.com"
                onInputComplete={(value) => setImnput(value)}
                />
            </div>
        )
}

export default AppForm
