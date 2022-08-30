// write your code here
const init = () => {
    loadMenu();

   
  

function loadMenu(){
    fetch(`http://localhost:3000/ramens`)
    .then(response => response.json())
    .then(data => displayImg(data))

    }   }

function displayImg(images){
    const Name=document.querySelector('#ramen-menu')
    images.forEach(Image => {
        const img=document.createElement('img');
        img.src=Image.image
        Name.appendChild(img)
        //  Name.appendChild(h3)

        const imgSelect=document.querySelector('#ramen-menu')
       
        img.addEventListener("click",()=>{
        //     // const selectedImage=document.querySelector('#ramen-detail')
                    console.log(Image.name)
            
        //     // const imgg=document.getElementById('#img');
            
        //     imgg.src=dispImg.image
        //     selectedImage.appendChild(imgg)
        });
    });
}

document.addEventListener('DOMContentLoaded',init)