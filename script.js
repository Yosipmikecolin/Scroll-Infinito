
getUser();
getUser();
getUser();


const capa = document.getElementById("capa");

window.addEventListener("scroll",function(){

    const {scrollTop,scrollHeight,clientHeight} = document.documentElement;


    console.log({scrollTop,scrollHeight,clientHeight});
if(scrollTop + clientHeight >= scrollHeight){

    MostrarLoader();

}
  
});



function MostrarLoader(){

    document.getElementById("carga").style.display="block";

    setTimeout(()=>{

        getUser();

    },1000);


}






async function getUser(){


    const users = await fetch(`https://jsonplaceholder.typicode.com/posts/${getAleatorio()}`);
    const postUser = await users.json();


    const avatars = await fetch("https://randomuser.me/api/");
    const postAvatar = await avatars.json();

   


    const data = {post: postUser, avatars: postAvatar.results[0]};

    AgregarDom(data);


}






function getAleatorio(){


    return Math.floor(Math.random() * 100) + 1;


}




function AgregarDom(data){


    
    
    
   const caja = document.createElement("div");
   caja.classList.add("posts");

   caja.innerHTML = `
   
   <h4 class="titulo">${data.post.title}</h4>
   <p class="texto">${data.post.body}</p>

   <img src="${data.avatars.picture.thumbnail}" alt="${data.avatars.name.first}" />
   <span>${data.avatars.name.first} ${data.avatars.name.last}</span>
   `;


    capa.appendChild(caja);

    document.getElementById("carga").style.display="none";


}

