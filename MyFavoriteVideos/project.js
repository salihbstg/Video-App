const btn = document.getElementById("btn");
const txtUrl = document.getElementById("url");
const urlName = document.getElementById("urlName");
const div = document.getElementById("links");
const iframe = document.getElementById("frame");
const deleteBtn=document.getElementById("deleteBtn");
const deleteText=document.getElementById("deleteText");

btn.addEventListener("click", () => {
    if (urlName.value === "" || txtUrl.value === "") {
        alert("Lütfen tüm boşlukları doldurun");
    } else {
        const newLink = new Source(urlName.value, txtUrl.value);
        ui.addLink(newLink);
        Storage.setLocalStorage(newLink);
    }
    ui.clearElements(txtUrl,urlName);
});
document.addEventListener("DOMContentLoaded", ui.reloadLinks);
div.addEventListener("click", e => {
        if (e.target.id == "aa") {
            let link = e.target.className;
            iframe.setAttribute("src", link);
        }
        e.preventDefault();
    })
deleteBtn.addEventListener("click",()=>{
    if(deleteText.value===""){
        alert("Lütfen tüm boşlukları doldurun");
    }
    else{
        let remove=deleteText.value;
        ui.clearRemoveElements(deleteText);
        Storage.removeLink(remove);
    }
    location.reload();
});