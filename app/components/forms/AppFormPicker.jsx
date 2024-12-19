import React from 'react';
import AppPicker from '../AppPicker';
import {ErrorMessage} from '../forms'
import { useFormikContext } from 'formik';

function AppFormPicker({name,placeholder, items,}) {
        const {values,errors,touched,setFieldValue } = useFormikContext()
        return (
                <>
                
                <AppPicker
                   item={items}
                   placeholder={placeholder}
                   onSelectItem={(item)=>setFieldValue(name,item)}
                   selectedItem={values[name]}
                   
                   />

                   <ErrorMessage visible={touched[name]} error={errors[name]} />
                </>
                
        );
}

export default AppFormPicker;