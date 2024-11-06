import "./Employee.css"

interface Employee {
    name: string
    role: string
    image: string
    primaryColor: string
    date: string
}

const Employee  = ({name, role, image, primaryColor, date} : Employee) => {

    return (<div className="employee">
        <div className="header" style={{backgroundColor: primaryColor}}>
            <img src={image} alt={name}/>
        </div>
        <div className="footer"> 
            <h4>{name}</h4>
            <h5>{role}</h5>
            <h5>{new Date(date).toLocaleDateString()}</h5>
        </div>
    </div>)

}

export default Employee