import { Formik } from 'formik';
import React from 'react';

function AppForm({onSubmit, initialValues, validationSchema, children}) {

        return (
                <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                
                >

                        {()=>(
                                <>
                                {children}
                                
                                
                                </>
                        )}


                </Formik>

               
        );
}

export default AppForm;