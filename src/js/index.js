
  // modo 1:
   const emailImput = document.getElementById("email-input"); //id do input
   const submitButton = document.getElementById("enviar"); //botao enviar
   const form = document.getElementById("email"); //campo form

    submitButton.addEventListener("enviar", (e)=>{e.preventDefault();
        const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (emailInput.value.match(regEx)){
            form.classList.remove("error");
        } else {
            form.classList.add("error");
        }
    });

/* console.log(emailImput);
   console.log(submitButton);
   console.log(form);*/ 