/// <reference path="../../tools/typings/react/react.d.ts" />
/// <reference path="../../tools/typings/react/react-dom.d.ts" />
/// <reference path="../ts/Interfaces.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DealsTable } from "./DealsTable";

ReactDOM.render(
    <DealsTable auctions={0} name="Me" avgClearingCpm={0} state={false} revenue={0} impressions={0} />,
    document.getElementById('datatable')
);
