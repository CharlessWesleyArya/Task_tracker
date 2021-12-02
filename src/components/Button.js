import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
    return <button onClick={onClick} style={{backgroundColor:'green'}} className='btn'>{text}</button>
}
Button.defaultProps={
    color:'black'
}
Button.protoTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}

export default Button