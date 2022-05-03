import React from 'react';
import '../../../styles/components/Atoms/Form/Checkbox.scss';

export default function Checkbox() {
    return (
        <div className="custom-control custom-checkbox">
            {/* <input type="checkbox" className="custom-control-input" id="remember-me"/>
            <label className="custom-control-label"
                for="remember-me">Remember me</label> */}

            <label className="customcheck">Remember me
                <input type="checkbox"/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}