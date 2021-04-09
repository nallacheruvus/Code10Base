import React from 'react';
import { Field, reduxForm } from "redux-form";
import store from './store';

const InsForm = props => {
    const { handleSubmit, pristine, submitting, reset } = props;
    return (
        <form onSubmit={handleSubmit}>
            IDS:<Field name="ids" required="required" component="input" type="text" placeholder="Enter ID" />
            <br />
        Name:<Field name="pname" component="input" type="text" placeholder="Enter Name" />
            <br />
        Email:<Field name="pemail" component="input" type="text" placeholder="Enter Email" />
            <br />
            <button type="submit" disabled={pristine || submitting}>Submit</button>
            <button type="button" onClick={reset} disabled={pristine || submitting}>Clear</button>

        </form>

    );
};

export default reduxForm({
    form: 'simple',
})(InsForm);