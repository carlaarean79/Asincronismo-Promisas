let div= document.getElementById("container")
         fetch("https://fakestoreapi.com/products")
.then( 
    response => response.json() 
)
.then(
    json => {json.forEach (product => {
                 const card= document.createElement("div");
                 card.classList.add("card-style")
                 card.innerHTML +=  `
                 <div>
                 <h1>ID: ${product.id} - ${product.category} </h1>
                 <h2>${product.title} $ ${product.price}</h2>
                <p >${product.description}</p>
                </div>
                <div>
                <img src="${product.image}" alt="${product.title}"> 
                </div>          
                 `
                 div.appendChild(card);
                 
        })
    }
    )
.catch( (error) => {
    console.log("TypeError " + error  )
}
  
)

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json)) 