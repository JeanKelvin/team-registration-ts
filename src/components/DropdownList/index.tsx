import './DropdownList.css'

interface DropdownList {
    updated: (value: string) => void
    label: string
    required: boolean
    value: string
    items: string[]
}

const DropdownList = (props: DropdownList) => {

    return(
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={evento => props.updated(evento.target.value)} required={props.required} value={props.value}>
                <option></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList