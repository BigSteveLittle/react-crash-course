import PropTypes from 'prop-types'

const Button = ({bgColor, txtColor, text, onClick}) => {
    
    return (
        <button 
            onClick={onClick}
            className='btn' 
            style={{backgroundColor: bgColor, color: txtColor}}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    bgColor: 'black'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button