const addUrlicon=document.querySelector(".addUrl")

let basket= JSON.parse(localStorage.getItem("data")) ||  [] ;



let dataId=["aa","bb","cc","dd","ee","ff","gg","hh","ii","jj"]
addUrlicon.addEventListener("click",popup)
addUrlicon.addEventListener("click",(e)=>{
  console.log(e.currentTarget)
  console.log(e.currentTarget.style.display="none")

})
function popup(){
    const popupPage=document.querySelector(".popup")
   popupPage.innerHTML=`<div class="field">
   <div class="inline-input">
    <p>
     <input type="text" class="site-Name" placeholder="Name"> 
    </p>
   <p><input type="url" name="" id="" class="site-Url"placeholder="URL"></p>
   </div>
<button class="url-save-btn">save</button>
</div>
`

let saveBtn=popupPage.querySelector(".url-save-btn")
console.log(saveBtn)
let count=1 
let a = -1 ;

saveBtn.addEventListener("click",()=>{
 
 // window.open('https://www.w3schools.com/jsref/met_html_click.asp')
 let siteName=popupPage.querySelector(".site-Name").value  
 let siteUrl=popupPage.querySelector(".site-Url").value
 const containerList=document.querySelector(".list")
   count++;
   a++;
   if(a>=10){
    a=0
  }
  


   console.log(count)
console.log(a)
 if(basket.length<10){
  basket.push(
  {
    siteName,siteUrl,count,
    IdofElement:dataId[a]+count

  }  
  )
  saveBtn.style.display="block";
 //// addUrlicon.style.display="block"



}else{
     saveBtn.style.display="none";
   ////  addUrlicon.style.display="none"
}

containerList.innerHTML=basket.map((item,indexId)=>{
console.log(dataId[a])
 return (`
 <div class="container-site-detail">
 <div class="field-modify">
  <p class="vistsite"> ${item.siteName} </p>
  <p class="visturl"> ${item.siteUrl} </p>
  </div>
 <p class="edit" data-id=${item.IdofElement}> <i class="fa-regular fa-pen-to-square"></i> </p>
<p class="remove"  data-id=${item.IdofElement}>  <i class="fa-solid fa-trash"></i> </p>

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
    console.log(item.parentElement)
  item.parentElement.remove();
const  removeId=item.dataset.id;
console.log(removeId,"i am removeID",typeof removeId,item.dataset.id)
basket = basket.filter((item)=>{
 console.log(typeof item.count)
 
 


 return item.IdofElement != removeId


})
console.log(basket)
checkItemnumber()
  })
})




editName.addEventListener("click",()=>{

})

moreAction.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    console.log(item,"this is item",item.dataset.id,item.previousElementSibling)
   let cureentEditId=item.dataset.id

   
   basket = basket.filter((item)=>{
    console.log(typeof item.count)
    
    
   
   
    return item.IdofElement != cureentEditId
   
   
   })
   
   
   
   
   
    const changeSitename=item.previousElementSibling
 
   changeSitename.innerHTML=`
   
   <div class="input-name-field" id="afterEdit">
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

localStorage.setItem("data",JSON.stringify(basket));

})






}


function checkItemnumber(){
  let saveBtn=document.querySelector(".url-save-btn")
  console.log(saveBtn)
 if(basket.length<10){
  saveBtn.style.display="block";
 //// addUrlicon.style.display="block"
 }else{
  saveBtn.style.display="none";
  //addUrlicon.style.display="none"
 }
}




 //assign those id value which is avail and also  not


////localStorage


//localStorage.setItem("data",JSON.stringify(basket));

//localStorage.setItem("id",JSON.stringify(a))































document.getElementById('file').addEventListener('change', (e)=>{
  const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      localStorage.setItem('wallpaper', base64String);
      document.body.style.background = `url(data:image/png;base64,${base64String})`;
    };
    reader.readAsDataURL(file);
})

const bgmImage=document.querySelector(".img-container");

const getImage= localStorage.getItem('wallpaper')

 document.body.style.background=` url(data:image/png;base64,${getImage})`

 //bgmImage.style.background=` url(data:image/png;base64,${getImage})`






























