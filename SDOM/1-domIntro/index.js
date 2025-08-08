// const links = document.querySelectorAll('a');


// links.forEach(link => {
//     console.log(link.textContent);
    
// });

// console.log(links);

// const SocialMediasObj = [...links].map((link) => {

//     return {
//         name: link.textContent,
//         url: link.href
//     }
// });

// let socialMedias = JSON.stringify(SocialMediasObj);

// console.log(socialMedias);

// socialMedias = JSON.parse(socialMedias);

// console.log(socialMedias);

// const SocialMediasObj = [
//   {
//     name: 'Instagram',
//     url: 'https://instagram.com/seuusuario'
//   },
//   {
//     name: 'Facebook',
//     url: 'https://facebook.com/seuusuario'
//   },
//   {
//     name: 'Twitter',
//     url: 'https://twitter.com/seuusuario'
//   },
//   {
//     name: 'WhatsApp',
//     url: 'https://wa.me/5511999999999' // número no formato internacional sem + ou espaços
//   },
//   {
//     name: 'E-mail',
//     url: 'mailto:seuemail@email.com'
//   }
// ];

// console.log(SocialMediasObj2);


const Lista = document.getElementById('printSocials');

console.log(Lista);

function CreateLink(SocialMedia) {
    const a = document.createElement('a');
    a.textContent = SocialMedia.name;
    a.href = SocialMedia.url;
    a.target = '_blank';
    a.style.display = 'block';
    a.style.textDecoration = 'none';
    a.style.color = 'red'

    return a;
}

fetch('SocialMediasObj.json')
.then(Response => Response.json())
.then(data => {
    data.forEach(social => {
        Lista.appendChild(CreateLink(social))
    })
})
.catch(err => {
    console.error('Deu merda rapaziada! Json:', err);
})


