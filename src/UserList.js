import React from 'react';
import Header from './Header';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList, UserCreate } from './users';
import jsonServerProvider from 'ra-data-json-server';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from './Dashboard';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const StyleButton = styled.button`
border: none;
outline: 0;
display: inline-block;
padding: 10px 25px;
color: white;
background-color: black;
text-align: center;
cursor: pointer;
margin-left:600px;
margin-bottom: 20px;
box-shadow: 0px 10px 14px -7px #276873;
border-radius:8px;
display:inline-block;
cursor:pointer;
font-family: 'Lemonada', cursive;
font-size:16px;
font-weight:bold;
padding:13px 32px;
text-decoration:none;
float: left;
text-shadow:0px 1px 0px #3d768a;`

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const userList = () => {
    return (
        <div>


            <Admin
                dataProvider={dataProvider}
                dashboard={Dashboard}>
             <Resource name="users" list={UserList} edit={EditGuesser} create={UserCreate} icon={UserIcon} />
             <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
            </Admin>
            <Link to='/Book'><StyleButton>Back</StyleButton></Link>
        </div>
    );
}
export default userList