
import React from 'react';
import AppTextInput from '../AppTextInput';

import ErrorMessage from './index';

import { useFormikContext } from 'formik';


function AppFormField({name, ...otherProps}) {
        const {setFieldTouched, touched,handleChange,errors }=useFormikContext();
        return (
                <>
                 <AppTextInput
                 onBlur={()=>setFieldTouched(name)}
                 onChangeText={handleChange(name)}
                {...otherProps}
                />
                <ErrorMessage visible={touched[name]} error={errors[name]}/>

                
                </>
             
        );
}

export default AppFormField;