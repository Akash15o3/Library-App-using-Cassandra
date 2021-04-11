import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import Button from "react-bootstrap/Button";
import history from '../history';
import "./css/dashboard.css";

export class Dashboard extends Component {
    constructor(props){
    super(props);
    this.state = {
        books: [
            {
                "Name": "Harry Potter",
                "Author": "JK Rowling",
                "Publisher": "abc",
                "Year": "2000"
            },
            {
                "Name": "Harry Potter",
                "Author": "JK Rowling",
                "Publisher": "abc",
                "Year": "2000"
            },
            {
                "Name": "Harry Potter",
                "Author": "JK Rowling",
                "Publisher": "abc",
                "Year": "2000"
            }
        ],
        columns: [
            {
                dataField: 'Name',
                text: 'Book Name',
                sort: true
            },
            {
                dataField: 'Author',
                text: 'Author',
                sort: true
            },
            {
                dataField: 'Publisher',
                text: 'Publisher',
                sort: true
            },
            {
                dataField: 'Year',
                text: 'Published Year',
                sort: true
            },
            {
                dataField: 'button',
                text: 'Action',
                formatter: this.Select
            }
        ],
        isSelect: false,
        ButtonText: "Select"
    };
    this.onSelectChanged.bind(this);
    }

    onSelectChanged() {
        this.setState({ isSelect: !this.state.isSelect });
        this.setState({ButtonText: "Deselect"})
        console.log(this.state.isSelect);
    }
    
    Select = (cell, row, rowIndex, formatExtraData) => {
        const { ButtonText } = this.state
        return (
          <Button
            onClick={() => {
              this.onSelectChanged(row);
            }}
            variant="outline-info">
            {ButtonText}
          </Button>
        );
    };
    
    
    render() {
    return (
        <div class="container-fluid">
            <div class="page-header">
                <h1 class="appname">SJSU Library</h1>
                <h5 class="name">Welcome name!</h5>
            </div>
            <div class="table-header">List of books</div>
            <BootstrapTable 
                striped 
                bordered 
                hover
                keyField = 'id'
                data={this.state.books}
                columns={this.state.columns}>
            </BootstrapTable>
            <Button variant="link" block size="lg" onClick={() => history.push('/MyBooks')}>
                Go to MyBooks
            </Button>
        </div>
    );
    }
}

export default Dashboard
