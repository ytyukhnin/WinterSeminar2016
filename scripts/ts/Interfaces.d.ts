interface IAppConfig {
    href:string
}

interface ICollectionJson {
    collection:ICollectionJsonCollection
}

interface ICollectionJsonCollection {
    version:string,
    href:string,
    links:ICollectionJsonLink[],
    items:ICollectionJsonItem[],
    queries:any[],
    template:any,
    error:any
}

interface ICollectionJsonLink {
    href:string,
    rel:string,
    prompt:string,
    name:string,
    render?:string
}

interface ICollectionJsonItem {
    href:string,
    data:ICollectionJsonData[],
    links:ICollectionJsonLink[],
    key?:number
}


interface ICollectionJsonData {
    prompt:string, 
    name:string, 
    value:any
}