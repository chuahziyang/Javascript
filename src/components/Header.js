// import PropTypes from 'prop-types'
import Button from "./Button"



const Header = (props) => {

    const onClick = () => {
        console.log("asdd")
    }
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button color="blue" text="hello" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}


export default Header
