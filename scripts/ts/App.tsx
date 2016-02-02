/// <reference path="../../tools/typings/react/react.d.ts" />
/// <reference path="../../tools/typings/react/react-dom.d.ts" />
/// <reference path="../../tools/typings/jquery/jquery.d.ts" />
/// <reference path="../../tools/typings/react-bootstrap/react-bootstrap.d.ts" />
/// <reference path="../../tools/typings/lodash/lodash.d.ts" />
/// <reference path="../ts/Interfaces.d.ts" />

// DefinitelyTyped => https://github.com/borisyankov/DefinitelyTyped
//                 => https://github.com/DefinitelyTyped/tsd

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
                deals: { }
            };
        this.handlePrevPage = this.handlePrevPage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handleFirstPage = this.handleFirstPage.bind(this);
        this.handleLastPage = this.handleLastPage.bind(this);
    } 
    
    private getDataForPage(rel:string) {
        var collectionJson:ICollectionJson  = this.state.deals;
        var link = _(collectionJson.collection.links).find( 
            function(o) { return o.rel === rel; } );
            
        $.getJSON(link.href)
            .done(resp => this.setState({ deals: resp }));
    }

    componentWillMount() {
        $.getJSON(this.props.dealsHref)
            .done(resp => this.setState({ deals: resp }));
    }

    handlePrevPage(event, selectedEvent) {
        this.getDataForPage("previous");
    }

    handleNextPage(event, selectedEvent) {
        this.getDataForPage("next");     
    }    
    
    handleFirstPage(event, selectedEvent) {
        this.getDataForPage("first");
    }

    handleLastPage(event, selectedEvent) {
        this.getDataForPage("last");     
    }            
    
    render() {
        return (
            <div>
                <CollectionJsonTable 
                    collection = {this.state.deals.collection}
                />
                
                <Pager>
                    <PageItem href="#" onSelect={this.handleFirstPage}>&larr; First</PageItem>
                    <PageItem href="#" onSelect={this.handlePrevPage}>Previous</PageItem>
                    {' '}
                    <PageItem href="#" onSelect={this.handleNextPage}>Next</PageItem>
                    <PageItem href="#" onSelect={this.handleLastPage}>Last &rarr;</PageItem>
                </Pager>                
            </div>
        )
    }        
}

ReactDOM.render(
    <App 
        dealsHref="api/reports/deals"
    />,
    document.getElementById('dealstable')
);
