// Application configuration interface
interface IAppConfig {
    dealsHref:string
}

// Collection+JSON interfaces
interface ICollectionJson {
    collection:ICollectionJsonCollection
}

interface ICollectionJsonCollection {
    version:string,
    href:string,
    links:ICollectionJsonLink[],
    items:ICollectionJsonItem[],
    queries:any[], // ICollectionJsonQuery[]
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