import React from 'react';
import TextField from '@material-ui/core/TextField';

export const Login = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return(
        <div>
            <div>
                {hasError ? <TextField {...input} {...props}
                error
                label="Error"
                helperText={meta.error}
                /> : <TextField {...input} {...props}/>}
            </div>
        </div>
    )
}

export const Password = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;
    return(
        <div>
            <div>
                {hasError ? <TextField {...input} {...props}
                error
                label="Error"
                helperText={meta.error}
                /> : <TextField {...input} {...props}  />}
            </div>
        </div>
    )
}

