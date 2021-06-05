import React from 'react';

const CheckboxGroup = ({
    options,
    label,
    name,
    onChange,
    selectedBrands
}) => {

    return (
        <div>
            {label}
            {options.map(option => (
                <label key={option.value}>
                    <input 
                        name={name}
                        type="checkbox"
                        checked={selectedBrands.findIndex(v => Number(v) === option.value) >= 0}
                        value={option.value || ''}
                        onChange={onChange}
                    />{' '}
                    {option.description}
                </label>
            ))}
        </div>
    );
};

export default CheckboxGroup;