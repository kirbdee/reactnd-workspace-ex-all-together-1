import React from 'react';
import PropTypes from 'prop-types';

const GamerInput = (props) =>
    (<input
        className="new-gamer-input"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.handleChange(event.target.value)}
    />);

GamerInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default GamerInput;