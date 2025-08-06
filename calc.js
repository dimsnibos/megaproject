
        const boxLeft = document.getElementById("angka")
        const banyakAngka = ["0","1","2","3","4","5","6","7","8","9","x","y"]
        const value = document.getElementById("value")
        const bukanAngka = ["+", "-", "/", "x"]
        const boxRight = document.getElementById("bukanAngka")
        const del = document.createElement("button")
        del.innerText = "delete"
        const calc = document.createElement("button")
        calc.innerText ='enter'
        const clear = document.createElement("button")
        clear.innerText = "clear"
        banyakAngka.forEach((angka)=>{
            const button = document.createElement('button')
            button.innerText = angka
            button.addEventListener("click",()=>{
                value.innerText += angka
            })
        boxLeft.append(button)
        })
        bukanAngka.forEach((bebas)=>{
            const button = document.createElement("button")
            button.innerText = bebas
            boxRight.append(button)
            button.addEventListener("click", ()=>{
                 value.innerText += bebas
            })
        })

        boxRight.append(del)
        del.addEventListener("click",()=>{
            value.innerText = value.innerText.slice(0, -1)
        })
        boxRight.append(calc)
        calc.addEventListener("click",()=>{
            let ekspresi = value.innerText
            ekspresi = ekspresi.replace(/x/g, "*")
            try{
                const hasil = eval(ekspresi)  //eval untuk mengoperasikan
                value.innerText = hasil
            }
            catch{
                value.innerText = "operasi gagal"
                setTimeout(()=>{
                    value.innerText = ""
                },1000)
            }
        })
        boxRight.append(clear)
        clear.addEventListener("click", ()=>{
            value.innerText = "THANK YOU"
            setTimeout(()=>{
                value.innerText = ""
            }, 2000)
        })
        const changeBg = document.createElement("button")
        changeBg.innerText="Change"
        changeBg.style.width = "auto";
        boxRight.append(changeBg)
         let init = -1
        changeBg.addEventListener("click", ()=>{
           
            init ++
            const warna = ["red","blue","white","brown","white", "transparent"]
           const parallax2 = document.getElementById("parallax-2")
            parallax2.style.backgroundColor = warna[init]
        })


        const chords = ["a", "c", "d", "e"]
        const piano = document.getElementById("chord")
        chords.forEach((chord)=>{
            const button = document.createElement("button")
            button.innerText = chord
            button.addEventListener("click", ()=>{
                const sound = new Audio(`${chord}.wav`)
                sound.play()
            })
            piano.append(button)
        })
        const loading = document.getElementById("loading")
function insta(){
    loading.style.display = "flex"
    document.body.style.opacity = "0.3"
    setTimeout(()=>{
        loading.style.display = "none"
        document.body.style.opacity = "1"
        window.location.href="https://instagram.com/ptramadian_"
    },2000)
   
}
function wa(){
    loading.style.display = "flex"
    document.body.style.opacity = "0.3"
    setTimeout(()=>{
        loading.style.display = "none"
        document.body.style.opacity = "1"
        window.location.href="https://wa.me/6287815397331"
   },2000)
}



const chatbot = document.getElementById("chatBot")
const user = document.getElementById("user")
let initt = 0;

function botSay(data){
    return [
        "Hello, gua Jarvis, Siapa Nama Lu??",
        `Hi ${data?.nama}, Apa Hobi lu?`,
        `Ouh hobi lu ${data?.hobi}, kerenn, di mana kota tempat tinggal lu?`,
        `Ouh di ${data?.kota}, Kota Yang Besar!`,
    ]
}
chatbot.innerHTML= botSay()[0]
let userData = [ ]

function bot(){
    initt ++
    if (initt == 1){
        botDelay({nama : user.value})
    }
    else if (initt ==2){
        botDelay({hobi: user.value})
    }
     else if (initt ==3){
        botDelay({kota: user.value})
    }
     else if (initt ==4){
       finishing()
       document.body.style.opacity = "0.3"
    loading.style.display ="flex"
    setTimeout(()=>{
        user.value = ""
          document.body.style.opacity = "1"
         loading.style.display ="none"
               chatbot.innerHTML = "Makasi sampai jumpa lagi"

    },2000)
    }
     else if (initt == 5){
        botEnd()
    }
}

function botDelay(jawabanUser){
    console.log(userData)
    userData.push(user.value)
    document.body.style.opacity = "0.3"
    loading.style.display ="flex"
    setTimeout(()=>{
        user.value = ""
          document.body.style.opacity = "1"
         loading.style.display ="none"
        chatbot.innerHTML = botSay(jawabanUser)[initt]

    },2000)
    

}
function finishing(){
    console.log("finishing....")
}
function botEnd(){
    chatbot.innerHTML = "bot End....."
    setTimeout(()=>{
        chatbot.innerHTML=""
          window.location.reload()
    },1000)
}