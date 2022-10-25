import React from 'react';
import PropTypes from 'prop-types';

const Radiobutton = ({value,label, styleClass, onChange}) => {

    const handleChange = (event) => {
        const {selectedOption} = event.target;
        onChange(selectedOption);
    };

    return (
        <div className={`form-group ${styleClass}`}>
            <label>
                <input
                    type="radio"
                    // className='mr-2'
                    value={value}
                    Checked={null}
                    onChange={onChange}/>

                {label}
            </label>
        </div>
    )
};

Radiobutton.propTypes = {
    value:PropTypes.string,
    styleClass: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

Radiobutton.defaultProps = {
    styleClass: ''
};

export default Radiobutton;