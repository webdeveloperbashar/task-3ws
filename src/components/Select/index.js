import React from 'react'

const Select = ({ name, className, onChange, options, style }) => {
    return (
        <select style={style} name={name} className={className} onChange={onChange}>
            <option>Select</option>
            {options.map((data) => (
                <option key={data} value={data}>
                    {data}
                </option>
            ))}
        </select>
    )
}

export default Select;