/// <reference path="../../tools/typings/react/react.d.ts" />
/// <reference path="../../tools/typings/react/react-dom.d.ts" />
/// <reference path="../../tools/typings/jquery/jquery.d.ts" />
/// <reference path="../../tools/typings/react-bootstrap/react-bootstrap.d.ts" />
/// <reference path="../../tools/typings/lodash/lodash.d.ts" />
/// <reference path="../ts/Interfaces.d.ts" />

import * as _ from 'lodash';
import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pager, PageItem } from 'react-bootstrap';
import { CollectionJsonTable } from "./CollectionJsonTable";


class App extends React.Component<IAppConfig, any> {
    
    constructor(props) {
        super(props);
        this.state = {
                data: { }
            };
        this.handlePrevPage = this.handlePrevPage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
    } 

    componentWillMount() {
        $.getJSON(this.props.href)
            .done(resp => this.setState({ data: resp }));
    }

    handlePrevPage(event, selectedEvent) {
        var collectionJson:ICollectionJson  = this.state.data;
        var link = _.find(collectionJson.collection.links, 
            function(o) { return o.rel === "previous"; } );
        $.getJSON(link.href)
            .done(resp => this.setState({ data: resp }));
        }

    handleNextPage(event, selectedEvent) {
        var collectionJson:ICollectionJson  = this.state.data;
        var link = _.find(collectionJson.collection.links, 
            function(o) { return o.rel === "next"; } );
        $.getJSON(link.href)
            .done(resp => this.setState({ data: resp }));      
    }          
    
    render() {
        return (
            <div>
                <CollectionJsonTable 
                    collection = {this.state.data.collection}
                />
                
                <Pager>
                    <PageItem href="#" onSelect={this.handlePrevPage}>Previous</PageItem>
                    {' '}
                    <PageItem href="#" onSelect={this.handleNextPage}>Next</PageItem>
                </Pager>                
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
