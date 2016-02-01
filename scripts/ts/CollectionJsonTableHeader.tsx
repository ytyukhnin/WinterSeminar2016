/// <reference path="../../tools/typings/react/react.d.ts" />
/// <reference path="../../tools/typings/lodash/lodash.d.ts" />
/// <reference path="../ts/Interfaces.d.ts" />

import * as React from 'react';
import * as _ from 'lodash';


export class CollectionJsonTableHeader extends React.Component<ICollectionJsonItem, any> {
    
    constructor(props:ICollectionJsonItem) {
        super(props);
    }
    
    render() {
        var headerCells = _(this.props.data)
          .map((datum, idx) => <th key={idx}>{datum.prompt}</th>)
          .value();

        return (
            <thead>
                <tr>
                {headerCells}
                </tr>
            </thead>
        );
    }
    
}