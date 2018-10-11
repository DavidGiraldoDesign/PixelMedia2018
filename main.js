let onMobile =  (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);

let body = document.querySelector("body"); console.log("Hi!");

function app() {


    body.innerHTML = `

                <div class="container" >
                    
                    <div id="app-advised">    
                        <img id="phone" src="images/smartphone.png">     
                        <br>
                        <h2 >1) Abre la web en tu celular.
                        <br> 2) Agrégala a tu pantalla de inicio como una app.</h2>                  
                    </div>

                    <div id="turn-phone">
                        <img id="phone" src="images/smartphone.png">     
                        <br>
                        <h2> Gira tu celular</h2>                  
                    </div> 
    
                </div> 

                

                   
                <!--h2 >Abre la app en tu celular y agrégala a tu inicio</h2-->
                         
                     

                     <div id="title">
                         
                         <img src="images/logo.png">
                     </div>
                     <div id="info">
                         <p>By Jose David GM - 10/10/2018</p>
                         <p>Follow me on 
                         <a href="https://www.behance.net/JoseDavidGiraldoM" target=" _blank">Behance</a> 
                         / <a href="https://www.instagram.com/_david.giraldo/" target=" _blank">Instagram<a></p>
                     </div>
                       
                        `;
                        console.log(onMobile);
    if(onMobile == true){
        body.querySelector('#app-advised').style.display = "none";
    }

}

app();