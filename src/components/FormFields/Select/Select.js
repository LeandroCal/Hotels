import React from 'react';

const Select = ({
    label,
    name,
    value,
    onChange,
    options,
    disabled
}) => {

    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <select
                name={name}
                onChange={onChange}
                value={value}
                disabled={disabled}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.description}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;