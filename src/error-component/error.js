import "./error.css";

const errorHandler = (()=>{
    let cont = document.querySelector("div.error-container");

    const showError = (message) => {
        let loader = document.createElement("div");
        loader.classList.add("error");
        loader.innerHTML = `<span class="err-msg">Es ist Folgender Fehler aufgetreten: ${message}</span>`;
        cont.append(loader);
    } 

    const hideError = () => {
            cont.innerHTML = "";
    }

        
    return {showError, hideError}

})()


export { errorHandler };