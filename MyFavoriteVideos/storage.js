class Storage{
    static getLocalStorage(){
        let arr;
        if(localStorage.getItem("links")===null){
            arr=[];
        }
        else{
            arr=JSON.parse(localStorage.getItem("links"));
        }
        return arr;
    }
    static setLocalStorage(newLink){
        let arr=this.getLocalStorage();
        arr.push(newLink);
        localStorage.setItem("links",JSON.stringify(arr));
    }
    static removeLink(name){
        let arr=this.getLocalStorage();
        arr.forEach((element,index) => {
           if(element.name===name){
            arr.splice(index,1);
           }
        });
        localStorage.setItem("links",JSON.stringify(arr));
    }
}