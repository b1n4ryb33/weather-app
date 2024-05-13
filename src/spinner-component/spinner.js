import "./spinner.css";

const spinner = (()=>{
    let cont = document.querySelector("div.loader-container");

    const showLoader = () => {
        let loader = document.createElement("div");
        loader.classList.add("loader");
        cont.append(loader);
    } 

    const hideLoader = () => {
        setTimeout(() => {
            cont.innerHTML = "";
        }, 1000);        
        
    }

        
    return {showLoader, hideLoader}

})()


export { spinner };