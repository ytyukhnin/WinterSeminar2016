/// <reference path="../../tools/typings/react/react.d.ts" />
/// <reference path="../../tools/typings/react/react-dom.d.ts" />
/// <reference path="../../tools/typings/jquery/jquery.d.ts" />
/// <reference path="../../tools/typings/react-bootstrap/react-bootstrap.d.ts" />
/// <reference path="../ts/Interfaces.d.ts" />

import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pagination } from 'react-bootstrap';
import { CollectionJsonTable } from "./CollectionJsonTable";


class App extends React.Component<IAppConfig, any> {
    
    constructor(props) {
        super(props);
        this.state = {
                data: { },
                activePage: 1
            };
        this.handleSelect = this.handleSelect.bind(this);
    } 

    componentWillMount() {
        $.getJSON(this.props.href)
            .done(resp => this.setState({ data: resp }));
    }

     handleSelect(event, selectedEvent) {
        this.setState({
            activePage: selectedEvent.eventKey
        });
     }
    
    render() {
        return (
            <div>
                <CollectionJsonTable 
                    collection = {this.state.data.collection}
                />
                <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        items={20}
                        maxButtons={5}
                        activePage={this.state.activePage}
                        onSelect={this.handleSelect} />                
            </div>
        )
    }        
}

ReactDOM.render(
    <App 
        href="api/reports/deals"
    />,
    document.getElementById('datatable')
);
