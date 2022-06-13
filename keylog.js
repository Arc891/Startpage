document.addEventListener('keydown', logKey);

function logKey(e) {
    switch(e.key) {
        case "ArrowLeft":
            let cont = document.getElementsByClassName('continue')[0];
            if ( cont != null ) {
                cont.classList.remove('continue');
                cont.classList.add('rest');
            }   
            break;
        
        case "ArrowRight":
            let rest = document.getElementsByClassName('rest')[0];
            if ( rest != null ) {
                rest.classList.remove('rest');
                rest.classList.add('continue');
            }       
            break;   
        
        case "Enter":
            let website = document.getElementById('dir');
            let url = "https://www.google.com/search?q=";
            for (let i = 7; i < website.textContent.length - 1; i++) {
                url += website.textContent[i];
            }
            var myWindow = window.open(url, "_self");
            break;
        
        case "Backspace":
            let dir = document.getElementById('dir');
            if ( dir.textContent.length > 8 ){    
                let new_cd = "";
                
                for (let i = 0; i < dir.textContent.length - 2; i++) {
                    new_cd += dir.textContent[i];
                }

                var cdSpan = document.createElement('span')
                cdSpan.innerHTML = '<span class="blinking">_</span>';
                dir.textContent = new_cd;
                dir.appendChild(cdSpan);
            }
            break;

        default:
            if ( e.key.length > 1) { break; }
            
            let cd = document.getElementById('dir');            
            let new_cd = "";
            
            for (let i = 0; i < cd.textContent.length - 1; i++) {
                new_cd += cd.textContent[i];
            }
            new_cd += e.key;

            var cdSpan = document.createElement('span')
            cdSpan.innerHTML = '<span class="blinking">_</span>';
            cd.textContent = new_cd;
            cd.appendChild(cdSpan);
    }
}
