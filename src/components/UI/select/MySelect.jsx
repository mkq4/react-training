import React from 'react'

const MySelect = ({options, defaultValue}) => {
    console.log(options)
    return (
    <select>
        <option disabled value="">{defaultValue}</option>
        {options.map((el) => {
            return <option key={el.name} value={el.value}>{el.name}</option>
        })}
    </select>
  )
}

export default MySelect