import React from 'react';
import { AppForm, AppFormField, SubmitButton,AppFormPicker } from '../components/forms';
import * as Yup from 'yup'


function ListingsEditScreen({}) {
        const validationSchema=Yup.object().shape({
                title:Yup.string().required().min(1).label('Title'),
                price:Yup.number().required().min(1).max(10000).label('Price'),
                category:Yup.object().nullable().required().label('Category'),
                description:Yup.string().label('description')

        
            })

            const Categories=[
                {label:'category1', value:1},
                {label:'category2', value:2},
                {label:'category3', value:3},


            ]


        return (
                <AppForm
                initialValues={
                        {
                                price:"",
                                title:"",
                                category:null,
                                description:""


                        }
                }

                validationSchema={validationSchema}
                onSubmit={values=>console.log(values)}




               

                
                >
                        <AppFormField
                        name="title"
                        maxLength={255}
                        placeholder='Title'

                        
                        />

                        <AppFormField
                        name="price"
                        keyboardType='numeric'
                        maxLength={8}
                        placeholder='Price'
                        width={120}

                        
                        />

                        <AppFormPicker
                        placeholder='category'
                        items={Categories}
                        name="category"
                        width='50%'
                        PickerItemComponent={}

                        
                        />

                        <AppFormField
                        name="description"
                        multiline
                        numberOfLines={4}
                        maxLength={255}
                        placeholder='description'
                        
                        />

                        <SubmitButton title='post'/>
                        


                </AppForm>
        );
}



export default ListingsEditScreen;