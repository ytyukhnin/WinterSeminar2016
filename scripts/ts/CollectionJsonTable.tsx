/// <reference path="../../tools/typings/react/react.d.ts" />
/// <reference path="../../tools/typings/lodash/lodash.d.ts" />
/// <reference path="../ts/Interfaces.d.ts" />

import * as React from 'react';
import {CollectionJsonTableRow} from './CollectionJsonTableRow'
import {CollectionJsonTableHeader} from './CollectionJsonTableHeader'

export class CollectionJsonTable extends React.Component<ICollectionJson, any> {
    
    constructor(props:ICollectionJson) {
        super(props);
    }
    
    render() {
            if (!this.props || !this.props.collection) {
                return <div></div>;
            }

            if (!this.props.collection.items.length){
                return <p>No items found.</p>;
            }

            var rows = _(this.props.collection.items)
                .map((item, idx) => 
            <CollectionJsonTableRow
                    data = {item.data}
                    href = {item.href}
                    links = {item.links}
                    key={idx}
            />).value();

            return (
                <table className="table">
                    <CollectionJsonTableHeader
                        data={this.props.collection.items[0].data}
                        href = {this.props.collection.items[0].href}
                        links = {this.props.collection.items[0].links}
                    />
                    <tbody>
                        {rows}
                    </tbody>
                </table>);
    }
}