const timeStamp = '1582322163';
        const apiKey = '6ad9cc19b9b696d322ecca4e5bf59bed';
        const md5 = '8a90c6d544d8548a58c9020d27950b98';

        fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100`
        ).then((response) => {
            return response.json();
        }).then((jsonParsed) => {
            const divHero = document.querySelector('#herois');

            jsonParsed.data.results.forEach(element => {
                const verifica = element.thumbnail.path
                const verifica2 = element.thumbnail.extension
                const gif = (verifica2 === 'gif')
                const imagemNaoEncontrada = verifica.indexOf("image_not_available") > -1 ? true : false;
                if(imagemNaoEncontrada === false && gif === false){
                const srcImage = element.thumbnail.path + '/standard_incredible.' + element.thumbnail.extension
                const nameHero = element.name
                const descriptionHero = element.description

                createDivHero(srcImage, nameHero, divHero, descriptionHero); 
                }
            });

            console.log(jsonParsed);
        })

        function createDivHero(srcImage, nameHero, divToAppend, descriptionHero) {
            const divPai = document.createElement('div')
            const divFilho = document.createElement('div')
            const textName = document.createElement('h1')
            const img = document.createElement('img')
            const description = document.createElement('p')

            description.textContent = descriptionHero
            textName.textContent = nameHero
            img.src = srcImage

            divFilho.appendChild(img)
            divFilho.appendChild(textName)
            //divFilho.appendChild(description)
            divPai.appendChild(divFilho)
            divToAppend.appendChild(divPai)

            divPai.classList.add("personagem");
            divFilho.classList.add("container")
        }