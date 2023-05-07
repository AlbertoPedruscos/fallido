let miAudio = document.getElementById("miAudio");
miAudio.src = "menu.mp3";
miAudio.load();
miAudio.play();
var fer=0
var red=0
var mer=0
var mcl=0
var alp=0
var ast=0
var tau=0
var sau=0
var wil=0
var has=0
function codigo(){
    //1
    var primero = document.getElementsByName("logo")
    if (primero=='animal');{
        fer=fer+1
        red=red+1
        tau=tau+1
    }
    elseif (primero=='signo');{
        mer=mer+1
        mcl=mcl+1
        ast=ast+1
        sau=sau+1
    }
    elseif (primero=='letra');{
        alp=alp+1
        wil=wil+1
        has=has+1
    }
    //2
    var segundo = document.getElementsByName("tipo")
    if (segundo=='historicos');{
        fer=fer+1
        mcl=mcl+1
        sau=sau+1
        wil=wil+1
        alp=alp+1
        mer=mer+1
    }
    elseif (segundo=='nuevos');{
        ast=ast+1
        has=has+1
        tau=tau+1
        red=red+1
    }
    //3
    var tercero = document.getElementsByName("cat")
    if (tercero=='alta');{
        fer=fer+1
        red=red+1
        mer=mer+1
    }
    elseif (tercero=='media');{
        ast=ast+1
        mcl=mcl+1
        sau=sau+1
        alp=alp+1
    }
    elseif (tercero=='baja');{
        tau=tau+1
        wil=wil+1
        has=has+1
    }
    //4
    var cuarto = document.getElementsByName("din")
    if (cuarto=='ricos');{
        fer=fer+1
        red=red+1
        mer=mer+1
    }
    elseif (cuarto=='medio');{
        ast=ast+1
        mcl=mcl+1
        sau=sau+1
        alp=alp+1
    }
    elseif (cuarto=='pobres');{
        tau=tau+1
        wil=wil+1
        has=has+1
    }
    //5
    var quinto = document.getElementsByName("cul")
    if (cuarto=='lat');{
        fer=fer+1
        tau=tau+1
        alp=alp+1
    }
    elseif (quinto=='ger');{
        red=red+1
        mer=mer+1
        sau=sau+1
    }
    elseif (quinto=='ang');{
        ast=ast+1
        mcl=mcl+1
        wil=wil+1
        has=has+1
    }
    //6
    var sexto = document.getElementsByName("cam")
    if (sexto=='mucho');{
        fer=fer+1
        mcl=mcl+1
        wil=wil+1
        
    }
    elseif (sexto=='poco');{
        red=red+1
        mer=mer+1
        alp=alp+1
    }
    elseif (sexto=='cero');{
        ast=ast+1
        has=has+1
        sau=sau+1
        tau=tau+1
    }
    //7
    var septimo = document.getElementsByName("col")
    if (septimo=='roj');{
        fer=fer+1
        sau=sau+1
    }
    elseif (septimo=='nar');{
        mcl=mcl+1
    }
    elseif (septimo=='ver');{
        ast=ast+1
    }
    elseif (septimo=='neg');{
        mer=mer+1
        has=has+1
        tau=tau+1
    }
    elseif (septimo=='azu');{
        red=red+1
        alp=alp+1
        wil=wil+1
    }
    //8
    var octavo = document.getElementsByName("mot")
    if (septimo=='fer');{
        fer=fer+1
        sau=sau+1
        has=has+1
    }
    elseif (septimo=='mer');{
        mcl=mcl+1
        mer=mer+1
        ast=ast+1
        wil=wil+1
    }
    elseif (septimo=='hon');{
        tau=tau+1
        red=red+1
    }
    elseif (septimo=='ren');{
        alp=alp+1
    }
    //9
    var noveno = document.getElementsByName("edad")
    if (noveno=='jov');{
        wil=wil+1
        tau=tau+1
        mcl=mcl+1
        alp=alp+1
    }
    elseif (noveno=='med');{
        sau=sau+1
        mer=mer+1
        ast=ast+1
        fer=fer+1
        red=red+1
    }
    elseif (noveno=='vet');{
        has=has+1
    }
    //10
    var decimo = document.getElementsByName("fav")
    if (decimo=='vet');{
        tau=tau+1
        red=red+1
    }
    elseif (decimo=='ham');{
        mer=mer+1
        mcl=mcl+1
    }
    elseif (decimo=='alo');{
        ast=ast+1
        wil=wil+1
        alp=alp+1
    }
    elseif (decimo=='sch');{
        has=has+1
        fer=fer+1
        sau=sau+1
    }
    var total=[red, fer, mer, alp, mcl, ast, sau, has, tau, wil]
    var fuerte=red
    var ima='red'
    for (var i=0;i=9;i=i+1){
        total[i]
        if (total[i]>fuerte){
            fuerte=0
            fuerte=total[i]
            ima=0
            if (total==[1]){
                ima='fer'
            }
            elseif (total==[2]);{
                ima='mer'
            }
            elseif (total==[3]);{
                ima='alp'
            }
            elseif (total==[4]);{
                ima='mcl'
            }
            elseif (total==[5]);{
                ima='ast'
            }
            elseif (total==[6]);{
                ima='sau'
            }
            elseif (total==[7]);{
                ima='has'
            }
            elseif (total==[8]);{
                ima='tau'
            }
            elseif (total==[9]);{
                ima='wil'
            }
        }
    }
    if (ima=='fer');{
        const miParrafo = document.getElementById("equi");
        miParrafo.innerHTML = "Tienes corazon tifosi";
        var imagen = document.getElementById("escudo");
        imagen.src = "fer.png";
        miAudio = document.getElementById("miAudio");
        miAudio.src = "italia.mp3";
        audio.play();
    } 
    elseif(ima=='red');{
        const miParrafo = document.getElementById("equi");
        miParrafo.innerHTML = "Eres un toro con alas";
        var imagen = document.getElementById("escudo");
        imagen.src = "redbull.png";
        miAudio = document.getElementById("miAudio");
        miAudio.src = "bull.mp3";
        audio.play();
    }
    elseif(ima=='mer');{
        const miParrafo = document.getElementById("equi");
        miParrafo.innerHTML = "¡Larga vida a las flechas plateadas!";
        var imagen = document.getElementById("escudo");
        imagen.src = "mer.png";
        miAudio = document.getElementById("miAudio");
        miAudio.src = "alemania.mp3";
        audio.play();
    }
    elseif(ima=='alp');{
        const miParrafo = document.getElementById("equi");
        miParrafo.innerHTML = "Eres un nostalgico del r25 y de los williams renault";
        var imagen = document.getElementById("escudo");
        imagen.src = "alp.png";
        miAudio = document.getElementById("miAudio");
        miAudio.src = "fr.mp3";
        audio.play();
    }
    elseif(ima=='mcl');{
        const miParrafo = document.getElementById("equi");
        miParrafo.innerHTML = "Eres un nostalgico de Senna vs Prost y de Alonso vs Hamilton";
        var imagen = document.getElementById("escudo");
        imagen.src = "mcl.png";
        miAudio = document.getElementById("miAudio");
        miAudio.src = "uk.mp3";
        audio.play();
    }
    elseif(ima=='ast');{
        const miParrafo = document.getElementById("equi");
        miParrafo.innerHTML = "Confias en la mision y en la 33";
        var imagen = document.getElementById("escudo");
        imagen.src = "aston.png";
        miAudio = document.getElementById("miAudio");
        miAudio.src = "uk.mp3";
        audio.play();
    }
    elseif(ima=='sau');{
        const miParrafo = document.getElementById("equi");
        miParrafo.innerHTML = "Confias en el 2026 y eres amante de BMW";
        var imagen = document.getElementById("escudo");
        imagen.src = "alfa.png";
        miAudio = document.getElementById("miAudio");
        miAudio.src = "swi.mp3";
        audio.play();
    }
    elseif(ima=='tau');{
        const miParrafo = document.getElementById("equi");
        miParrafo.innerHTML = "Admiras a los grandes pilotos que han pasado por esta escuderia";
        var imagen = document.getElementById("escudo");
        imagen.src = "alpha.png";
        miAudio = document.getElementById("miAudio");
        miAudio.src = "italia.mp3";
        audio.play();
    }
    elseif(ima=='wil');{
        const miParrafo = document.getElementById("equi");
        miParrafo.innerHTML = "Hechas de menos los 90 y a Montoya";
        var imagen = document.getElementById("escudo");
        imagen.src = "will.png";
        miAudio = document.getElementById("miAudio");
        miAudio.src = "uk.mp3";
        audio.play();
    }
    elseif(ima=='has');{
        const miParrafo = document.getElementById("equi");
        miParrafo.innerHTML = "Eres listo quieres un Ferrari a precio de Twingo";
        var imagen = document.getElementById("escudo");
        imagen.src = "haas.png";
        miAudio = document.getElementById("miAudio");
        miAudio.src = "usa.mp3";
        audio.play();
    }
}
let elemento = document.getElementById("oculto");
elemento.style.display = "none";