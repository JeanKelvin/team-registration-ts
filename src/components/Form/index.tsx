import { useState } from "react"
import Button from "../Button"
import DropdownList from "../DropdownList"
import TextField from "../TextField"
import "./Form.css"
import { IEmployee } from "../../shared/interfaces/IEmployee"

interface FormProps {
    registeredEmployee: (employee: IEmployee) => void
    teams: string[]
}

const Form = (props: FormProps) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [date, setDate] = useState('')


    const save = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.registeredEmployee({
            name,
            role, 
            image,
            team,
            date
        })

        setName('')
        setRole('')
        setImage('')
        setTeam('')
        setDate('')
    }

    return (
        <section className="form">
            <form onSubmit={save}>
                <h2>Fill in the information to create the employee card</h2>
                <TextField required={true} label="Name" placeholder="Enter your name" value={name} updated={value => setName(value)}/>
                <TextField required={true} label="Role" placeholder="Enter your role" value={role} updated={value => setRole(value)}/>
                <TextField label="Image" placeholder="Enter your image" value={image} updated={value => setImage(value)}/>
                <TextField label="Team joining date" placeholder="" value={date} updated={value => setDate(value)} type="date"/>
                <DropdownList required={true} label="Time" items={props.teams} value={team} updated={value => setTeam(value)}/>
                <Button>
                     Create card
                </Button>
            </form>
        </section>
    )
}

export default Form