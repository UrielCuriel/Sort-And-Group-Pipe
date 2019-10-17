export namespace Utils {
    export const getDeepObjectValue = (key:string,object:Object)=>{
        const value = key.split('.').map((_key=>({key:_key,object}))).reduce(((vp,vn)=>({key:vn.key,object:vp.object[vp.key]})));
        return value.object[value.key];
	}
}