barre = document.querySelector('.barre')
barre1 = document.querySelectorAll('.barre1')
menu = document.querySelector('.menu')
anl = document.querySelector('#anl')

ms = menu.style
ms.display = 'none'
barre.onclick = ()=>{
    ms.transition = "all 1s"
    if(ms.display == "none"){
        barre1[0].classList.add("b1")
        barre1[2].classList.add("b3")
        barre1[1].style.backgroundColor = "white"
        ms.display = "block"
    }
    else{
        
        barre1[0].classList.remove("b1")
        barre1[2].classList.remove("b3")
        barre1[1].style.backgroundColor = "black"
        ms.display = 'none'
    }
}

list_th = ['cg','hg','sp','ift','mq',"sc"]


div_th = document.querySelectorAll('.sport')
for (let i in div_th){
    try{
        div_th[i].style.backgroundColor = 'white'
        div_th[i].style.transition = 'all 0.8s'
    }
    catch{0}
    // console.log(div_th[i].style.backgroundColor)
    div_th[i].onclick = ()=>{
        
        if (div_th[i].style.backgroundColor == 'white'){
            x = Math.round(Math.random()*254)
            y = Math.round(Math.random()*254)
            z = Math.round(Math.random()*254)
            opp = [0.5,0.6,0.7,0.8,0.9,1]
            op = Math.round(Math.random()*5)
            color = 'rgba('+x+','+y+","+z+','+opp[op]+")"
            div_th[i].style.backgroundColor = color
            div_th[i].style.border = "1px solid "+color
            div_th[i].style.boxShadow = "0 0 10px "+color
            div_th[i].style.color = "white"
            
        }
        else{
            div_th[i].style.backgroundColor = "white"
            div_th[i].style.border = "1px solid black"
            div_th[i].style.color = "black"
        }

    }
}


thm = document.querySelector('.theme')
char = document.querySelector('.char')
th = document.getElementById('th')
thm.onclick = () =>{
    cpt = 0
    for(let i in div_th){
        try{
            if (div_th[i].style.backgroundColor != 'white'){
                cpt += 100/div_th.length
                th.innerHTML = cpt.toFixed(0)+'% theme'
                char.style.transition = 'all 1s'
                char.style.width = cpt.toFixed(0)+"%"
            }
        }
        catch{0}
    }
    if (cpt == 0){
        th.innerHTML = 'theme'
        char.style.width = cpt+'%'
    }
}

rech = document.getElementById('rech')
aucun = document.getElementById('aucun')
op = document.querySelectorAll('.op1')
rech.onkeyup = ()=>{
    try{
        let compte = 0
        lett = !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        lett += "0123456789 "
        for(let i in op){
            op[i].style.display = "none"
            console.log(rech.value.toLowerCase())
        
        veri = op[i].innerHTML.includes(rech.value.toLowerCase())
        veri1 = lett.includes(rech.value.toLowerCase())
        if (veri && veri1 ==false ){
            compte +=1
            op[i].style.display = "block"
            // console.log(veri)
        }
        else{
            op[i].style.display = "none"
            // console.log(veri)
        }
        if (compte == 0){
            aucun.style.display = "block"
            // compte =-1
        }
        else{
            aucun.style.display = "none"
        }
        if (rech.value.length == 0){
            aucun.style.display = "none"
        }
        }
    }
    catch{0}
}