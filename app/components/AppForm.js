
import React from 'react';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

import { useFormikContext } from 'formik';


function AppForm({name, ...otherProps}) {
        const {setFieldTouched, touched,handleChange,errors }=useFormikContext();
        return (
                <>
                 <AppTextInput
                 icon='email'
                 placeholder='email'
                 onBlur={()=>setFieldTouched(name)}
                 onChangeText={handleChange(name)}
                {...otherProps}
                />
                <ErrorMessage visible={touched[name]} error={errors[name]}/>

                
                </>
             
        );
}

export default AppForm;