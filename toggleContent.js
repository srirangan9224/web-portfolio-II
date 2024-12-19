document.addEventListener("DOMContentLoaded",()=>{
        document.querySelectorAll("section").forEach((section)=>{
                if (section.className !== "about"){
                        section.style.display = 'none';
                }
        })


        document.querySelectorAll("#content-toggle").forEach((link)=>{
                link.addEventListener("click",()=>{
                        displaySection(document.querySelector(`.${link.dataset.class}`))
                })
        })
})

function displaySection(sectionItem){
        document.querySelectorAll("section").forEach((section)=>{
                if (sectionItem.className == section.className){
                        section.style.display = 'block';
                }
                else{
                        section.style.display = 'none';
                }
        })
}