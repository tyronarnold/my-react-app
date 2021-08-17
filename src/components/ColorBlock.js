

class ColorBlock extends React.Component {
    state = { 
        color: "" 
    }; 
    inputRef = React.createRef(); 
    updateColor = () => { 
    this.setState(() => ({ color: this.inputRef.current.value })) 
    }; 

    clearInput = () => { 
        this.inputRef.current.value = ""; 
        this.inputRef.current.focus(); 
    }; 
        render() { 
            const { color } = this.state; 
                var squareStyle = { 
                    backgroundColor: color 
                }; 
    return ( 
    <div className="color-area">
    <div style={squareStyle} className="color-square" /> 
    <form>
    <input  
    ref={}
    onChange={}
    placeholder=""       /> 
            <button
            type="button" 
            onClick = {this.clearInput}>
            clear
            </button>
    </form>
    </div>
            );
        }
    }
            
    
