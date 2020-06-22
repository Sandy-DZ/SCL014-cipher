import cipher from './cipher.js';
/* qué pasaría si el offset fuera negativo /este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios,
    puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar 
    el soporte para estos casos*/


function validar(){
    var usuario = document.getElementById(usuario);
    var password = document.getElementById(numberUser);
    
    if (usuario == "admin" & password =="123456"){
        document.getElementById("validar").innerHTML="la información fue verificada"
        document.getElementById("userName").value="";
        document.getElementById("numberUser").value="";
    }else{
        document.getElementById("validar").innerHTML = "no se pudo identificar"
        document.getElementById("userName").value="";
        document.getElementById("numberUser").value ="";
    }
}



var enter = document.getElementById("buttonEnter");
var fisrtScreen = document.getElementById("firstScreen");
var secondScreen = document.getElementById("secondScreen");

enter.addEventListener("click", function(){
    fisrtScreen.className = "hideMe";
    secondScreen.className = "welcomeTo"; 
  });


var siguiente = document.getElementById("buttonNext");
var newcontactScreen = document.getElementById("newcontactScreen");

siguiente.addEventListener("click", function(){
  secondScreen.className = "hideMe";
  newcontactScreen.className = "welcomeTo";
});



var contactScreen = document.getElementById("contactScreen");
var botonListo = document.getElementById("buttonListo");

botonListo.addEventListener("click", function(){

newcontactScreen.className ="hideMe";
  contactScreen.className = "welcomeTo";

  var userName = document.getElementById("userName").value;
  var firstContact = document.getElementById("contactName").value;
 document.getElementById("allContacts").innerHTML = "Hola " + userName + ", en caso de emergencia enviaremos el mensaje a tus contactos favoritos"; 
document.getElementById("ContactOne").innerText = firstContact;
});


var addContact = document.getElementById("buttonadd");
addContact.addEventListener("click", function(){
  newcontactScreen.className ="welcomeTo";
}
)





    //console.log(cipher);

    //let txtInt = document.getElementById("originalText").value;
    //let offNum = document.getElementById("desplazamiento").value;
    // let txtCipher = document.getElementById("textoCifrado");

    // <----- separación de las variables del cipher---------> 

    let enter = document.getElementById("buttonEnter");
    let fisrtScreen = document.getElementById("firstScreen");
    let secondScreen = document.getElementById("secondScreen");
    let nextBtn = document.getElementById("buttonNext");
    let newcontactScreen = document.getElementById("newcontactScreen");
    let contactList = document.getElementById("contactLog");
    let botonListo = document.getElementById("buttonListo");
    let goBackMsg = document.getElementById("goBack");
    let finalScreen = document.getElementById("msgSent");
    let returnMsgPage = document.getElementById("buttonLast");
    let fakeCal = document.getElementById("calendarLog");
    let backToMsg = document.getElementById("goBackTwo");

    // funcion de cifrar
    document.getElementById("cifrarTexto").addEventListener('click', () =>{
      let offNum = document.getElementById("desplazamiento").value;
      let txtInt = document.getElementById("originalText").value;

      document.getElementById("textoCifrado").innerHTML = cipher.encode(offNum,txtInt);
    });
    
   // funcion de descifrado
    document.getElementById("descifrarTexto").addEventListener('click', () =>{
      let offNum = document.getElementById("desplazamiento").value;
      let txtInt = document.getElementById("originalText").value;
      document.getElementById("textoCifrado").innerHTML = cipher.decode(offNum,txtInt);
    });
    
    //Copiar mensaje al portapapeles
    document.getElementById("copy").addEventListener('click', () => {  
      const mensajeCodificado = document.getElementById('textoCifrado');
      mensajeCodificado.select();
      mensajeCodificado.setSelectionRange(0, 99999);
      document.execCommand("copy");
      //console.log(mensajeCodificado);
    })
    
    //Entrar a la aplicación
    enter.addEventListener("click", function(){
        fisrtScreen.className = "hideMe";
        secondScreen.className = "welcomeTo"; 
      });
    
      //Enviar el mensaje codificado
    nextBtn.addEventListener("click", function(){
      secondScreen.className = "hideMe";
      newcontactScreen.className = "welcomeTo";
    });

    //Botón para agregar nuevo contacto
    botonListo.addEventListener("click", function(){
        newcontactScreen.className ="hideMe";
        finalScreen.className ="welcomeTo";    
    });
    
    //Pantalla de los contactos agregados
    contactList.addEventListener("click", function(){
      secondScreen.className = "hideMe";
      contactScreen.className = "welcomeTo";
        let userName = document.getElementById("userName").value;
        let firstContact = document.getElementById("contactName").value;
        document.getElementById("allContacts").innerHTML = "Hola " + userName + ", estos son los contactos recientemente añadidos:"; 
        document.getElementById("ContactOne").innerText = firstContact;
    });

    //Botón para volver a la pantalla anterior
    goBackMsg.addEventListener("click", function(){
      contactScreen.className = "hideMe";
      secondScreen.className = "welcomeTo"; 
    });


                //Funciones del Popup
//Botón al abrir las instrucciones
let instructionsBtn = document.getElementById("btnInstructions");
instructionsBtn.addEventListener("click", function(){
  document.getElementById("instructions").style.display = "block";
});
//Botón para cerrar las instrucciones
let exitBtn = document.getElementById("btnClose");
exitBtn.addEventListener("click", function(){
  document.getElementById("instructions").style.display = "none";
});

//Volver a la pantalla de mensajes
returnMsgPage.addEventListener("click", function(){
  msgSent.className = "hideMe";
  secondScreen.className = "welcomeTo";
});

//Abrir el calendario falso
fakeCal.addEventListener("click", function(){
  secondScreen.className = "hideMe";
  fakeCalendar.className = "welcomeTo";
});

//Volver a la pantalla de mensajes
backToMsg.addEventListener("click", function(){
  fakeCalendar.className = "hideMe";
  secondScreen.className = "welcomeTo";
});