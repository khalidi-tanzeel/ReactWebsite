import React, { useState, useEffect } from 'react';
import PlanHeader from './PlanHeader';
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Inject, Filter, Group, Sort, FilterSettingsModel, Toolbar, PdfExport, Grid, ExcelExport, EditSettingsModel, ToolbarItems, Edit, PageSettingsModel, dataSourceChanged} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import './trip.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyleButton = styled.button`
border: none;
outline: 0;
display: inline-block;
padding: 10px 25px;
color: white;
background-color: black;
text-align: center;
cursor: pointer;
margin-left:50px;
margin-bottom: 50px;
box-shadow: 0px 10px 14px -7px #276873;
border-radius:8px;
display:inline-block;
cursor:pointer;
font-size:16px;
font-weight:bold;
padding:13px 32px;
text-decoration:none;
text-shadow:0px 1px 0px #3d768a;`

const StyleButton1 = styled.button`
border: none;
outline: 0;
display: inline-block;
padding: 10px 25px;
color: white;
background-color: black;
text-align: center;
cursor: pointer;
margin-left:3px;
box-shadow: 0px 10px 14px -7px #276873;
border-radius:8px;
cursor:pointer;
font-size:16px;
font-weight:bold;
padding:13px 32px;
text-decoration:none;
margin-bottom:10px;
text-shadow:0px 1px 0px #3d768a;`
const Trip = () => {

       

        const filterOption: FilterSettingsModel = {
            ignoreAccent: true,
            type: "Menu",//Menu,CheckBox, Excel
        } 
        return (

            <div>
                <PlanHeader />
                <h1 style={{ textAlign: "center" }}>Happy Tours provide you the best vacations</h1>
                <h4 style={{ textAlign: "center" }}>So, what are you waiting for, see the available places and pack your bags</h4>
                <div style={{ margin: "5%" }}>
                    <GridComponent dataSource={data}
                        allowPaging={true}
                        pageSettings={{ pageSize: 6 }}
                        allowFiltering={true}
                        allowGrouping={true}
                        allowSorting={true}
                        filterSettings={filterOption}
                        //toolbar={toolbarOptions}
                        allowPdfExport={true}
                        allowExcelExport={true}
                        //toolbarClick={toolbarClick}
                        //editSettings={editOption}
                      //  dataSourceChanged={dataSourceChanged}
                       // toolbar={toolbarOptions,['PdfExport']}
                        >
                        <ColumnsDirective >
                            <ColumnDirective field="ZipCode" headerText="Area-Code" textAlign="center" isPrimarykey={true}/>
                            <ColumnDirective field="Available Date" headerText="Available-Date" textAlign="center" width='170px' editType='datepickeredit'/>
                            <ColumnDirective field="Destination" headerText="Destination" textAlign="center" />
                            <ColumnDirective field="Hotel" headerText="Hotel" textAlign="center" filter={{ type: "CheckBox" }} />
                            <ColumnDirective field="Price" headerText="Price" Format="C2" textAlign="center"  />
                            <ColumnDirective field="Reviews" headerText="Reviews" textAlign="center" />
                        </ColumnsDirective>
                        <Inject services={[Page, Filter, Group,Sort]} /> 
                    </GridComponent>
                    <h4 style={{ textAlign: "center" }}>When you find your perfect vacation then click on the button below to fill the details</h4>
                    <Link to="/Payment"> <StyleButton>Book vacation</StyleButton> </Link>
                    <Link to="/Admin"> <StyleButton1>Admin View</StyleButton1> </Link>
                </div>
            </div>
        );
    
}


export default Trip
