import React from "react";

import { Filter, List, Datagrid, TextField, ReferenceField, EditButton, ReferenceInput, SelectInput, TextInput, Edit, SimpleForm, Create } from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />

    </Filter>
);
export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">

         <SelectInput optionText="name" />
            </ReferenceInput>
       
            <TextInput source="title" />
           <TextInput source="body" />
         <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
export const PostList = props => (
    <List filters={<PostFilter />}{...props}>

        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>

            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);