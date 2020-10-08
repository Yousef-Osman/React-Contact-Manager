import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class TextInputGroup extends Component {
    onValueChange = () => {
        console.log('working');
    }

    render() {
        const { name, label, value, type, placeholder, error, onValueChange } = this.props
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input type={type} className={classnames('form-control', {
                  'is-invalid': error
                })} name={name} placeholder={placeholder} value={value} onChange={onValueChange} />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        )
    }
}

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.string,
    onValueChange: PropTypes.func.isRequired
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;