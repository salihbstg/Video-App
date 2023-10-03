class ui {
    static addLink(newLink) {
        const div = document.getElementById("links");
        let innerText = `
        <a id="aa" href="" class="${newLink.url}">${newLink.name}</a>
        `;
        div.innerHTML += innerText;
    }
    static reloadLinks(){
        const div = document.getElementById("links");
        let arr = Storage.getLocalStorage();
        arr.forEach(element => {
            div.innerHTML+=`
            <a id="aa" href="" class="${element.url}">${element.name}</a>
            `;
        });
    }
    static clearElements(e1,e2){
        e1.value="";
        e2.value="";
    }
    static clearRemoveElements(e1){
        e1.value="";
    }
}