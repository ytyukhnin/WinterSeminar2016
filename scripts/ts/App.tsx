/// <reference path="../../tools/typings/react/react.d.ts" />
/// <reference path="../../tools/typings/react/react-dom.d.ts" />
/// <reference path="../../tools/typings/jquery/jquery.d.ts" />
/// <reference path="../ts/Interfaces.d.ts" />

import * as jQuery from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CollectionJsonTable } from "./CollectionJsonTable";


class App extends React.Component<IAppConfig, any> {
    
    constructor(props) {
        super(props);
        this.state = {
                data: { },
            };
    } 

    public componentWillMount() {
        jQuery.getJSON(this.props.href)
            .done(resp => this.setState({ data: resp }));
    }
    
    public render() {
        return (
            <div>
                <CollectionJsonTable 
                    collection = {this.state.data.collection}
                />
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
