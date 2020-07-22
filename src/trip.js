import React, { Component } from 'react';
import PlanHeader from './PlanHeader';
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Inject, Filter, Group, Sort, FilterSettingsModel,Toolbar, PdfExport, Grid, ExcelExport} from '@syncfusion/ej2-react-grids';
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
margin-left:600px;
margin-top: 5px;
box-shadow: 0px 10px 14px -7px #276873;
border-radius:8px;
display:inline-block;
cursor:pointer;
font-family: 'Lemonada', cursive;
font-size:16px;
font-weight:bold;
padding:13px 32px;
text-decoration:none;
text-shadow:0px 1px 0px #3d768a;`
class trip extends Component {

    
    render() {
    
        const  filterOption: FilterSettingsModel = {
            ignoreAccent: true,
            type: "Menu" ,//Menu,CheckBox, Excel
        }
            let grid: Grid | null ;
      const toolbarClick =(args) =>{
          if(grid){
              if(args.item.id.includes('pdfexport')) {
                  grid.pdfExport({
                    fileName:"HolidayDetails.pdf",
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
                    
                    
                    header:{
                        fromTop: 0,
                        height: 130,
                        contents: [{
                            type: 'Text',
                            value: 'Happy Tours',
                            position: { x: 0,y: 50 },
                            style: { textBrushColor: '#000000', fontSize: 30}
                        }]
                    },
                    footer: {
                        contents: [{
                            type: 'Text',
                            value: 'Thank you for visting us',
                            position: { x: 0,y: 50 },
                            style: { textBrushColor: '#000000', fontSize: 20, float:"left"}
                        }],
                        fromBottom: 0,
                        height: 90
                    }
                  });
                  
              } else if(args.item.id.includes('excelexport')){
                  grid.excelExport({
                      fileName:"HolidayDetails.xlsx"
                  });
              }
          }
       }
        return (

            <div>
                <PlanHeader />
                <h1 style={{ textAlign: "center" }}>Happy Tours provide you the best vacations</h1>
                <h4 style={{ textAlign: "center" }}>So, what are you waiting for, see the available places and pack your bags</h4>
                <div style={{margin:"5%"}}>
                    <GridComponent dataSource={data}
                    ref={g => grid=g}
                    allowPaging={true}
                    pageSettings={{pageSize: 6}}
                    allowFiltering={true}
                    allowGrouping={true}
                    allowSorting={true}
                    filterSettings={filterOption}
                    toolbar={['PdfExport', 'ExcelExport']}
                    allowPdfExport={true}
                    allowExcelExport={true}
                    toolbarClick={toolbarClick}>
                        <ColumnsDirective >
                            <ColumnDirective field="Available Date" headerText="Available-Date" textAlign="center" bold= "true"/>
                            <ColumnDirective field="Destination" headerText="Destination" textAlign="center"/>
                            <ColumnDirective field="Hotel" headerText="Hotel" textAlign="center" filter={{type:"CheckBox"}}/>
                            <ColumnDirective field="Price" headerText="Price" Format="C2" textAlign="center"/>
                            <ColumnDirective field="Reviews" headerText="Reviews" textAlign="center"/>
                        </ColumnsDirective>
                        <Inject services={[Page, Filter, Group, Sort, Toolbar, PdfExport, ExcelExport]}/>
                    </GridComponent>
                    <h4 style={{textAlign: "center"}}>When you find your perfect vacation then click on the button below to fill the details</h4>
                   <Link to ="/Book"> <StyleButton>Book vacation</StyleButton> </Link>
                </div>
            </div>
        );
    }
}


export default trip