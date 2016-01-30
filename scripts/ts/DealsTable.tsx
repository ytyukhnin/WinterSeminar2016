/// <reference path="../../tools/typings/react/react.d.ts" />
/// <reference path="../ts/Interfaces.d.ts" />

import * as React from 'react';

export class DealsTable extends React.Component<IDealProps, any> {
    public name:string;
    public state:boolean;
    public auctions:number;
    public impressions:number;
    public revenue:number;
    public avgClearingCpm:number;

    constructor(props:IDealProps) {
        super(props);
        this.name = "DealsTable";
    }
    
    render() {
        return <div>Hello world from {this.name}!</div>
    }
}