const btnSenha = document.querySelector('#btnSenha');
console.log(btnSenha);

btnSenha.addEventListener('click', () => {
   
  
     const digitos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '&','*'];

    let campo = document.querySelector('.p')        
    let senha = [];
    
    for (let i = 0; i < digitos.length; i++) {
       let random = Math.round(Math.random() * digitos.length);
       if (i < 15)
       senha += digitos[random];

           
    }

     campo.textContent = senha;
   

    
})