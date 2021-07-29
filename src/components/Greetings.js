import PropTypes from 'prop-types'
import Welcome from './Welcome';
import Name from './Name';

const Greetings = ({ name, fgcolor, bgcolor }) => {

    /*const onClick = () => {
        console.log('click from Greetings component')
    }*/

    return (
        <div>
            <header >
                <h1 className="center-text">Greetings Component</h1>
                <h1 className="center-text-m0">(External)</h1>
                <Welcome />
                <Name
                    name={name}
                    fgcolor={fgcolor}
                    bgcolor={bgcolor}
                />
            </header>
        </div>
    )
}

Greetings.defaultProps = {
    name: 'FirsName LastName',
    fgcolor: 'white',
    bgcolor: 'black',

}

Greetings.propTypes = {
    name: PropTypes.string.isRequired,
}
/*
const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}
*/
export default Greetings;
