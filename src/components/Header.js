import PropTypes from 'prop-types'
import Button from './Button';
const Header = ({title,onAdd,showAdd}) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button onClick={onAdd} text={showAdd ? 'close' :'Add'} color={showAdd ? 'red': 'green'}/>
           
        </header>
    )
}
Header.defaultProps={
    title:'Task Tracker'
}

Header.propTypes={
    title:PropTypes.string.isRequired
}
export default Header
