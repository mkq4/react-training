import React from 'react'

const MySelect = ({options, defaultValue, onChange}) => {
    return (
    <select onChange={(event) => onChange(event.target.value)}>
        <option disabled value="">{defaultValue}</option>
        {options.map((el) => {
            return <option key={el.name} value={el.value}>{el.name}</option>
        })}
    </select>
  )
}

export default MySelect