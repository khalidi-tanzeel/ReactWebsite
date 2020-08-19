import React, {Component} from 'react';
import Header from './Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {DataManager , UrlAdaptor} from '@syncfusion/ej2-data';
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Inject, Filter, Group, Sort, FilterSettingsModel, Toolbar, PdfExport, Grid, ExcelExport, EditSettingsModel, ToolbarItems, Edit, PageSettingsModel, dataSourceChanged} from '@syncfusion/ej2-react-grids';

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
text-shadow:0px 1px 0px #3d768a;
@media (max-device-width: 900px) {
    margin-left:250px;
}`;

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

class book extends Component {

   
    render(){
        let grid: Grid | null;
        const toolbarClick = (args) => {
            if (grid) {
                if (args.item.id.includes('pdfexport')) {
                    grid.pdfExport({
                        fileName: "HolidayDetails.pdf",
                        //exportType:'CurrentPage', through this we can export only one page content
                        theme: {           //customization of exported data
                            header: {
                                bold: true,
                                fontSize: 10
                            },
                            record: {
                                fontSize: 8
                            }
                        },


                        header: {
                            fromTop: 0,
                            height: 130,
                            contents: [{
                                type: 'Text',
                                value: 'Happy Tours',
                                position: { x: 0, y: 50 },
                                style: { textBrushColor: '#000000', fontSize: 30 }
                            }]
                        },
                        footer: {
                            contents: [{
                                type: 'Text',
                                value: 'Thank you for visting us',
                                position: { x: 0, y: 50 },
                                style: { textBrushColor: '#000000', fontSize: 20, float: "left" }
                            }],
                            fromBottom: 0,
                            height: 90
                        }
                    });

                } else if (args.item.id.includes('excelexport')) {
                    grid.excelExport({
                        fileName: "HolidayDetails.xlsx"
                    });
                }
            }
        }
        const editOption: EditSettingsModel = {allowEditing:true, allowAdding:true, allowDeleting:true};//Batch mode kay sath hm multiple rows at a time update kar saktay hain
        const toolbarOptions: ToolbarItems[] = ['Add', 'Edit','Delete','Update', 'Cancel' , 'PdfExport', 'ExcelExport']
       
        const baseURL: string="http://localhost:8080";
        const data: DataManager = new DataManager({
              adaptor: new UrlAdaptor(),
              insertUrl: baseURL + '/orders/insert',
              removeUrl: baseURL + '/orders/delete',
              updateUrl: baseURL + '/orders/update',
              url: baseURL + '/orders'
        });

        return(
            <div>
                <Header/>
                <div>
               
                <h1 style={{ textAlign: "center" }}>Now, you are on the Admin Mode</h1>
                <h4 style={{ textAlign: "center" }}>You can Add, Delete, Update records and download a copy for your reference</h4>
                <div style={{ margin: "5%" }}>
                    <GridComponent dataSource={data}
                        ref={g => grid = g}
                        allowPaging={true}
                        pageSettings={{ pageSize: 19 }}
                        allowGrouping={true}
                        toolbar={toolbarOptions}
                        allowPdfExport={true}
                        allowExcelExport={true}
                        toolbarClick={toolbarClick}
                        editSettings={editOption}
                      //  dataSourceChanged={dataSourceChanged}
                       // toolbar={toolbarOptions,['PdfExport']}
                        >
                        <ColumnsDirective >
                            <ColumnDirective field="ZipCode" headerText="Area-Code" textAlign="center" isPrimarykey={true}/>
                            <ColumnDirective field="Available Date" headerText="Available-Date" textAlign="center" width='150px' editType='datepickeredit'/>
                            <ColumnDirective field="Destination" headerText="Destination" textAlign="center" />
                            <ColumnDirective field="Hotel" headerText="Hotel" textAlign="center" filter={{ type: "CheckBox" }} />
                            <ColumnDirective field="Price" headerText="Price" Format="C2" textAlign="center"  />
                            <ColumnDirective field="Reviews" headerText="Reviews" textAlign="center" />
                        </ColumnsDirective>
                        <Inject services={[Page, Group, Toolbar, PdfExport, ExcelExport, Edit]} /> 
                    </GridComponent>
                    <h4>You can also see the List of users that are already booked with us</h4>
                    <Link to ="/UserList"> <StyleButton> View User List</StyleButton> </Link>
                    <Link to ="/Admin"> <StyleButton1> LogOut</StyleButton1> </Link>
                </div>
                
            </div>
            </div>
        );
    }
}


export default book
