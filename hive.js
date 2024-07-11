anim=document.querySelectorAll(".anime");

looper();

function looper(){
    for(let i=0;i<anim.length;i++){
        setTimeout(function(){
            gameFlash(anim[i],i);
        },i*3000);
        
    }
}

function gameFlash(btn,i){
    btn.classList.add("hello");
    setTimeout(function(){
        btn.classList.remove("hello");
        if(i==anim.length-1){
            looper();
        }
    },3000);
}

lat=document.querySelector(".batch1");
pop=document.querySelector(".batch2");

latest=document.querySelector(".latest");
popular=document.querySelector(".popular");

pan=document.querySelector(".panel");
pan.addEventListener("click",function(event){
    let act=event.target;
    if(pop==act){
        lat.classList.remove("active");
        pop.classList.add("active");
        popular.classList.remove("vity");
        latest.classList.add("vity");
    }
    else if(lat==act){
        pop.classList.remove("active");
        lat.classList.add("active");
        latest.classList.remove("vity");
        popular.classList.add("vity");
    }
})

sp=document.querySelector("#sport");
itc=document.querySelectorAll(".inact");
ict=document.querySelector(".navbar");
con=document.querySelector(".drop");
tats=document.querySelectorAll(".tatti")

function tits(tts){
    for(let j=0; j<4; j++){
        if(tats[j]==tts){
            return true;
        }
    }
    return false;
}

ict.addEventListener("click",function(event){
    let act=event.target;
    if(act.nodeName=="A"){
        for(i of itc){
            if(i==act){
                i.parentElement.classList.add("active");
            }else{
                i.parentElement.classList.remove("active");
            }
    }} 

        if(sp==act){
            con.classList.add("ac");
            sp.innerHTML= `SPORTS <i class="fa-solid fa-chevron-down"></i>`;
            let pov=sp.firstElementChild;
            pov.classList.add("up");
        }else if(tits(act)){
            con.classList.remove("ac");
            sp.parentElement.classList.add("active");
            sp.innerHTML= `${act.innerText} <i class="fa-solid fa-chevron-down"></i>`;
            
        }else if(sp.firstElementChild==act){
            for(i of itc){
                    i.parentElement.classList.remove("active");
                }
            sp.parentElement.classList.add("active");
            con.classList.toggle("ac");
            act.classList.toggle("up");
        }else if(act.nodeName=="A"){
            sp.innerHTML= `SPORTS <i class="fa-solid fa-chevron-down"></i>`;
            con.classList.remove("ac");  
            let dow=sp.firstElementChild;
            dow.classList.remove("up");
        }
        else{ 
            con.classList.remove("ac"); 
            let dow=sp.firstElementChild;
            dow.classList.remove("up");
        }
})

let tlg=document.querySelector(".tlg");
let menu=document.querySelector(".mensu");
let rope=document.querySelector(".rope");
let ind=document.querySelectorAll(".int");
let rnd=document.querySelector("#trp");
let gu=document.querySelectorAll(".tatti");
let mens=document.querySelector(".mens");

ict.addEventListener("click",function(event){
    let mat=event.target;
    if(tlg==mat){
        tlg.classList.toggle("cross");
        if(tlg.classList.contains("cross")){
            mens.classList.add("cats");
            setTimeout(()=>{
                menu.classList.add("boots");
            },5);
        }
        else{
                menu.classList.remove("boots");
                setTimeout(()=>{
                    mens.classList.remove("cats");
                },400);
        }
}})

menu.addEventListener("click",function(event){
    let rat=event.target;
    for (l of ind){
        if(l==rat){
            if(l==rnd){
                rope.classList.toggle("cats");
                rnd.innerText=`SPORTS >`;
                rnd.parentElement.classList.remove("tax");
            }
            else{
                tlg.classList.remove("cross");
                menu.classList.remove("boots");
                setTimeout(()=>{
                    mens.classList.remove("cats");
                },1000);
                rope.classList.remove("cats");
                l.parentElement.classList.add("tax");
                rnd.innerText=`SPORTS >`;
            }

        }
        else{
            l.parentElement.classList.remove("tax");
        }
    }
    for(g of gu){
        if(g==rat){
            rnd.parentElement.classList.add("tax");
            rnd.innerText=`${g.innerText} >`;
            tlg.classList.remove("cross");
            setTimeout(()=>{
                mens.classList.remove("cats");
            },400);
            menu.classList.remove("boots");
            rope.classList.remove("cats");
        }
    }
})

mlf=document.querySelector(".fa-magnifying-glass");
lmf=document.querySelector(".fa-xmark");
flm=document.querySelector("form");
mar=document.querySelector(".arch");

ict.addEventListener("click",function(event){
    let ev=event.target;
    if(mlf==ev){
        mar.classList.add("mar");
        flm.classList.add("mf");
        mlf.classList.add("icn");
        lmf.classList.remove("icn");
    }
    if(lmf==ev){
        flm.classList.remove("mf");
        mlf.classList.remove("icn");
        lmf.classList.add("icn");
        setTimeout(function(){
            mar.classList.remove("mar");
        },1000)
    }
})

url="https://coding-week-2024-api.onrender.com/api/data";
async function render(){
    let res= await axios.get(url);
    let are=res.data;

    are.sort(function(a, b) {
        let x = new Date(a.date);
        let y = new Date(b.date);
      
        // Compare the 2 dates
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    });

    mast=are.splice(5);

    addCards(latest,mast);
    addCards(popular,are);
}

function addCards(b,c){
for(let i=0;i<c.length;i++){
            let v=document.createElement("div");
            v.setAttribute("class", "cards");
            b.appendChild(v);
            let k=new Date(c[i].date);
            v.innerHTML=`   <div class="cardimg">
                                <img src="${c[i].image}">
                            </div>
                            <div class="extra">
                                <div class="type">${c[i].type}</div>
                                <div class="tent">${c[i].content}</div>
                            </div>    
                            <div class="cardcontent">
                                <div class="cardtext">${c[i].headline}</div>
                                <div class="cardcal">
                                    <span><i class="fa-regular fa-calendar"></i> ${k.toDateString()}</span>
                                </div>
                            </div>`;
}}

render();

news1=document.querySelector(".news1");
news2=document.querySelector(".news2");
newsa=document.querySelector(".newsa");
newsb=document.querySelector(".newsb");
dial=document.querySelector(".dial");
log=document.querySelector(".dialog");
imag=document.querySelector(".dialog .image");
closs=document.querySelector(".dialog > i");
q1=document.querySelector(".q1");
q2=document.querySelector(".q2");
t3=document.querySelector(".t3");
head=document.querySelector(".dialog h1")
fim=document.querySelectorAll("figure img")
fig=document.querySelectorAll("figcaption")
pole=document.querySelector(".pole");

closs.addEventListener("click",()=>{
    dial.classList.remove("maje");
    let m=imag.children[0];
    m.remove();
})

b1=document.querySelectorAll(".news1 span")
h1=document.querySelector(".news1 .pdiv p")

news1.addEventListener("click",function(){
    bg = window.getComputedStyle(news1, null).backgroundImage;
    imag.style.backgroundImage=bg;
    imag.style.backgroundSize="cover";
    q2.innerText=b1[0].innerText;
    q1.innerText=b1[1].innerText;
    t3.innerText=b1[3].innerText;
    dial.classList.add("maje");
    head.innerText=h1.innerText;
    fim[0].setAttribute("src",bg);
    fim[1].setAttribute("src",bg);
    fig[0].innerText=h1.innerText;
    fig[1].innerText=h1.innerText;
    pole.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore necessitatibus quam, corporis repellendus sint";
})

function dot(curd){
            let im=document.createElement("img");
            imag.appendChild(im);
            f=curd.children[0].children[0].getAttribute("src");
            imag.style.backgroundImage=null;
            im.setAttribute("src",f);
            im.style.height="100%";
            im.style.width="100%";
            dial.classList.add("maje");
            y=curd.children[1].children[0];
            head.innerText=y.innerText;
            fig[0].innerText=y.innerText;
            fig[1].innerText=y.innerText;
            fim[0].setAttribute("src",f);
            fim[1].setAttribute("src",f);
            q2.innerText="Featured";
            z=curd.children[1].children[1].children[0];
            t3.innerText=z.innerText;
            pole.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore necessitatibus quam, corporis repellendus sint";
    
            return 0;
}

function trot(curd){
            let im=document.createElement("img");
            imag.appendChild(im);
            f=curd.children[0].children[0].getAttribute("src");
            imag.style.backgroundImage=null;
            im.setAttribute("src",f);
            im.style.height="100%";
            im.style.width="100%";
            dial.classList.add("maje");
            y=curd.children[2].children[0];
            head.innerText=y.innerText;
            fig[0].innerText=y.innerText;
            fig[1].innerText=y.innerText;
            fim[0].setAttribute("src",f);
            fim[1].setAttribute("src",f);
            z=curd.children[2].children[1].children[0];
            t3.innerText=z.innerText;
            typ=curd.children[1].children[0];
            cnt=curd.children[1].children[1];
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            p=capitalizeFirstLetter(typ.innerText);
            q2.innerText=p;
            pole.innerText=cnt.innerText;

            return 0;
}

latest.addEventListener("click",function(event){
    let t= event.target;
    if(latest!=t){
        if(t.nodeName=="I"||t.nodeName=="SPAN"){
            curd=t.parentElement.parentElement.parentElement;
        }
        else{
            curd=t.parentElement.parentElement;
        }
        if(curd.childElementCount==2){
            q1.innerText="Latest";
            dot (curd);
            
        }
        else{
            q1.innerText="Latest";
            trot (curd);

        }
    }
})

popular.addEventListener("click",function(event){
    let t= event.target;
    if(latest!=t){
        if(t.nodeName=="I"||t.nodeName=="SPAN"){
            curd=t.parentElement.parentElement.parentElement;
        }
        else{
            curd=t.parentElement.parentElement;
        }
        if(curd.childElementCount==2){
            q1.innerText="Popular";
            dot (curd);
            
        }
        else{
            q1.innerText="Popular";
            trot (curd);
            
        }
    }
})

b2=document.querySelectorAll(".news2 span")
h2=document.querySelector(".news2 .pdiv p")

news2.addEventListener("click",function(){
    bg = window.getComputedStyle(news2, null).backgroundImage;
    imag.style.backgroundImage=bg;
    imag.style.backgroundSize="cover";
    q2.innerText=b2[0].innerText;
    q1.innerText=b2[1].innerText;
    t3.innerText=b2[3].innerText;
    dial.classList.add("maje");
    head.innerText=h2.innerText;
    fim[0].setAttribute("src",bg);
    fim[1].setAttribute("src",bg);
    fig[0].innerText=h2.innerText;
    fig[1].innerText=h2.innerText;
    pole.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore necessitatibus quam, corporis repellendus sint";
})

ba=document.querySelectorAll(".newsa span")
ha=document.querySelector(".newsa .pdiv p")

newsa.addEventListener("click",function(){
    bg = window.getComputedStyle(newsa, null).backgroundImage;
    imag.style.backgroundImage=bg;
    imag.style.backgroundSize="cover";
    q2.innerText=ba[0].innerText;
    q1.innerText=ba[1].innerText;
    t3.innerText=ba[3].innerText;
    dial.classList.add("maje");
    head.innerText=ha.innerText;
    fim[0].setAttribute("src",bg);
    fim[1].setAttribute("src",bg);
    fig[0].innerText=ha.innerText;
    fig[1].innerText=ha.innerText;
    pole.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore necessitatibus quam, corporis repellendus sint";
})

bb=document.querySelectorAll(".newsb span")
hb=document.querySelector(".newsb .pdiv p")

newsb.addEventListener("click",function(){
    bg = window.getComputedStyle(newsb, null).backgroundImage;
    imag.style.backgroundImage=bg;
    imag.style.backgroundSize="cover";
    q2.innerText=bb[0].innerText;
    q1.innerText=bb[1].innerText;
    t3.innerText=bb[3].innerText;
    dial.classList.add("maje");
    head.innerText=hb.innerText;
    fim[0].setAttribute("src",bg);
    fim[1].setAttribute("src",bg);
    fig[0].innerText=hb.innerText;
    fig[1].innerText=hb.innerText;
    pole.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempore necessitatibus quam, corporis repellendus sint";
})

