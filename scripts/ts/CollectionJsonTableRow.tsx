/// <reference path="../../tools/typings/react/react.d.ts" />
/// <reference path="../../tools/typings/lodash/lodash.d.ts" />
/// <reference path="../ts/Interfaces.d.ts" />

import * as React from 'react';
import * as _ from 'lodash';


export class CollectionJsonTableRow extends React.Component<ICollectionJsonItem, any> {
    
    constructor(props:ICollectionJsonItem) {
        super(props);
        //TODO: init fields?
    }
    
    public render() {
        var dataCells = _(this.props.data)
            .map((datum, idx) => <td key={idx}>{datum.value}</td>)
            .value();

        return (
            <tr>
            {dataCells}
            </tr>
        );
    }    
    
}