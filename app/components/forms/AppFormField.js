
import React from 'react';
import AppTextInput from '../AppTextInput';

import ErrorMessage from './index';

import { useFormikContext } from 'formik';


function AppFormField({name,width, ...otherProps}) {
        const {setFieldTouched, touched,handleChange,errors }=useFormikContext();
        return (
                <>
                 <AppTextInput
                 onBlur={()=>setFieldTouched(name)}
                 onChangeText={handleChange(name)}
                {...otherProps}
                width={width}
                />
                <ErrorMessage visible={touched[name]} error={errors[name]}/>

                
                </>
             
        );
}

export default AppFormField;