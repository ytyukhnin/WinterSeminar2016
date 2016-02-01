interface IAppConfig {
    href:string
}

interface ICollectionJson {
    collection:ICollectionJsonCollection
}

interface ICollectionJsonCollection {
    version:string,
    href:string,
    links:any[],
    items:ICollectionJsonItem[],
    queries:any[],
    template:any,
    error:any
}


interface ICollectionJsonItem {
    href:string,
    data:ICollectionJsonData[],
    links:string[]
}


interface ICollectionJsonData {
    prompt:string, 
    name:string, 
    value:any
}