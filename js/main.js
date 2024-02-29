

var productNameInput = document.getElementById("prodName")
var productCategoryInput = document.getElementById("prodCategory")
var productPriceInput = document.getElementById("prodPrice")
var productDescInput = document.getElementById("prodDesc")


var productList =[]
// if(localStorage.getItem("products") != null){
//     productList = JSON.parse(localStorage.getItem("products"))
//     display()
// }


productList = JSON.parse(localStorage.getItem("products"))
display()

function addInputValue(){

add()
    
display()

clear()
    

}

function add(){
    var product={
        name:productNameInput.value,
        category:productCategoryInput.value,
        price:productPriceInput.value,
        description:productDescInput.value,
    }

    productList.push(product)
    localStorage.setItem("products", JSON.stringify(productList))
}

function display(){
    var cartona = ``
    for(i=0; i<productList.length; i++){
        cartona +=`


        <tr>
                        <td>${i}</td>
                        <td>${productList[i].name}</td>
                        <td>${productList[i].category}</td>
                        <td>${productList[i].price}</td>
                        <td>${productList[i].description}</td>
                        <td><button class="btn btn-danger" onclick="deleteProd(${i})">Delete</button></td>
                        <td><button class="btn btn-success" onclick="showUpdate(${i})">Update</button></td>
                    </tr>
        
        
        `
    }

    document.getElementById("tbodyId").innerHTML=cartona
}

function clear(){
    productNameInput.value =''
    productCategoryInput.value =''
    productPriceInput.value =''
    productDescInput.value =''
}


function deleteProd(index){
productList.splice(index,1)
localStorage.setItem("products", JSON.stringify(productList))
display()
}


function search(value){
    var newCartona =``
    for(i=0;i<productList.length;i++){
        if(productList[i].name.toLowerCase().includes(value.toLowerCase())){
            newCartona += `

            <tr>
                            <td>${i}</td>
                            <td>${productList[i].name}</td>
                            <td>${productList[i].category}</td>
                            <td>${productList[i].price}</td>
                            <td>${productList[i].description}</td>
                            <td><button onclick="deleteProd(${i})">Delete</button></td>
                            <td><button>Delete</button></td>
                        </tr>
            
            `
        }
    }

    document.getElementById("tbodyId").innerHTML=newCartona
}

var productIndex = 0

function showUpdate(index){

    productIndex = index

    productNameInput.value= productList[index].name
    productCategoryInput.value= productList[index].category
    productPriceInput.value= productList[index].price
    productDescInput.value= productList[index].description
    window.scrollTo(0,0)

    document.getElementById('updateBtn').style.display="block"
    document.getElementById('addBtn').style.display="none"
}


function updateProduct(){
    document.getElementById('updateBtn').style.display="none"
    document.getElementById('addBtn').style.display="block"
    productList[productIndex].name= productNameInput.value
    productList[productIndex].category= productCategoryInput.value
    productList[productIndex].price= productPriceInput.value
    productList[productIndex].description= productDescInput.value

    localStorage.setItem("products", JSON.stringify(productList))
    display()
}