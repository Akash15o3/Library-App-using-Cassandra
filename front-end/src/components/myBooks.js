import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import Button from "react-bootstrap/Button";
import history from '../history';
import "./css/myBooks.css";

export class MyBooks extends Component {
    state = {
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
        ]
    }
    render() {
    return (
        <div className="container-fluid">
            <div class="page-header">
                <h1 class="appname">SJSU Library</h1>
                <h5 class="name">Welcome name!</h5>
            </div>
            <div class="table-header">List of Selected Books</div>
            <BootstrapTable 
                striped 
                bordered 
                hover
                keyField = 'id'
                data={this.state.books}
                columns={this.state.columns}>
            </BootstrapTable>
            <Button variant="link" block size="lg" onClick={() => history.push('/Dashboard')}>
                Go to Dashboard
            </Button>
        </div>
    );
    }
}

export default MyBooks