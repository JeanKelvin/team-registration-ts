import { IEmployee } from '../../shared/interfaces/IEmployee'
import Employee from '../Employee'
import './Team.css'

interface TeamProps {
    primaryColor: string
    secondaryColor: string
    name: string
    employees: IEmployee[]

}

const Team = (props: TeamProps) => {
    const css = { backgroundColor: props.secondaryColor }

    return (
        props.employees.length > 0 && <section className='team' style={ css }>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map( employee => 
                    <Employee 
                        primaryColor={props.primaryColor} 
                        name={employee.name} 
                        role={employee.role} 
                        image={employee.image}
                        date={employee.date}/> )}
            </div>
        </section>
    )
}

export default Team