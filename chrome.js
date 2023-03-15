const addUrlicon=document.querySelector(".addUrl")

let basket=[];

addUrlicon.addEventListener("click",popup)

function popup(){
    const popupPage=document.querySelector(".popup")
   popupPage.innerHTML=`<div class="field">
    <p>
     <input type="text" class="site-Name">Name    
    </p>
   <p><input type="url" name="" id="" class="site-Url">URl</p>
    
<button class="url-save-btn">save</button>
</div>
`

const saveBtn=popupPage.querySelector(".url-save-btn")
console.log(saveBtn)
let count=1;
saveBtn.addEventListener("click",()=>{
 // window.open('https://www.w3schools.com/jsref/met_html_click.asp')
 let siteName=popupPage.querySelector(".site-Name").value  
 const siteUrl=popupPage.querySelector(".site-Url").value
 const containerList=document.querySelector(".list")
   count++;
   console.log(count)

 if(basket.length<10){
  basket.push(
  {
    siteName,siteUrl,count
  }  
  )
}else{
    saveBtn.style.display="none"
}

containerList.innerHTML=basket.map((item,indexId)=>{

 return (`
 <div class="container-site-detail">
  <p class="vistsite"> ${item.siteName} </p>
  <p class="vistsite"> ${item.siteUrl} </p>
 <p class="edit" data-id=${indexId}>  Edit </p>
<p class="remove"  data-id=${count}>  remove </p>
</div>
 `)
}).join("")
  console.log(basket)

const moreAction=[...containerList.querySelectorAll(".edit")]
console.log(moreAction)
const editName=containerList.querySelector(".edit")

const removeItem=[...containerList.querySelectorAll(".remove")]
removeItem.forEach((item)=>{
  item.addEventListener("click",()=>{
    console.log(item.dataset.id)
  item.parentElement.remove();
const  removeId=item.dataset.id;
console.log(removeId,"i am removeID",typeof removeId)
basket = basket.filter((item)=>{
 console.log(typeof item.count)
 return item.count != removeId


})
console.log(basket)

  })
})




editName.addEventListener("click",()=>{

})

moreAction.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    console.log(item,"this is item",item.dataset.id,item.previousElementSibling)
   const changeSitename=item.previousElementSibling
 
   changeSitename.innerHTML=`
   
   <div class="input-name-field">
    <p> <input type="text" class="edit-input" ></p>
    <p> <input type="text" class="edit-input-url"></p>
    <button class="save-site-name">Save</button>
   </div>
   
   `
  let updateSiteName=changeSitename.querySelector(".save-site-name")
  updateSiteName.addEventListener("click",()=>{
    const inputValue=changeSitename.querySelector(".edit-input").value
    const inputUrlValue=changeSitename.querySelector(".edit-input-url").value
    changeSitename.innerHTML=`
   
    <div class="input-name-field">
     <p> ${inputValue}</p>
     <p> ${inputUrlValue}</p>
     <button data-unique="${count}" class="save-site-name">Save</button>
    </div>
    
    `
    const idtoAddinBasket=changeSitename.querySelector(".save-site-name").dataset.unique;
    console.log(idtoAddinBasket)

      basket.forEach((item)=>{
    
      if(item.count == idtoAddinBasket){
       
        item.siteName=inputValue
      }
      })
   



  })

  })
})






})

}



document.getElementById("image-file").value

let photo = document.getElementById("image-file").files[0]; 
let formData = new FormData(); 

formData.append("photo", photo); 
fetch('/upload/image', {method: "POST", body: formData});
console.log(formData)

