
export class ListView {
    api: string;
    allColumns: any[];
    selectedColumns: any[];
    dataKey: string;
    pageSize: number;
    pollingInterval: number;

    payload: any;
    constructor(
        api: string, allColumns: any[], selectedColumns: any[],
        dataKey: string,
        pageSize: number, pollingInterval: number) {
        this.api = api;
        this.allColumns = allColumns;
        this.selectedColumns = selectedColumns;
        this.dataKey = dataKey; // must be unique for all rows
        this.pageSize = pageSize;
        this.pollingInterval = pollingInterval;
    }
}

