const mots = [{
    affichable: '수영',
    traduction: 'natation',
    type: 'mot'
}, {
    affichable: '을',
    type: 'particule-sujet'
}, {
    affichable: '잘',
    traduction: 'bien',
    type: 'mot'
}, {
    affichable: '하',
    type: 'verbe',
    infinitif: '하다',
    traduction: 'faire'
}, {
    affichable: '지 못해',
    type: 'forme',
    traduction: 'ne pas être capable de'
}, {
    affichable: '요',
    type: 'conjugaison',
    forme: 'poli-informel'
}
]

window.onload = (event) => {
    elt = document.getElementById('text');
    elt2 = document.getElementById('explication');

    let text = "";
    mots.forEach(e => {
        
        const para = document.createElement("span");
        elt2.appendChild(para);

        const node = document.createTextNode(e.affichable);
        para.classList.add(e.type);
        if (e.type === 'mot' || e.type === 'verbe') {
            text += " ";
            const space = document.createTextNode(" ");
            para.appendChild(space);    
        }

        para.appendChild(node);
        text += e.affichable;

        //편안하다: to be confortable
    });

    elt.innerHTML = text;

};

