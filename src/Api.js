import md5 from 'md5';

const MY_PUBLIC_KEY = '4314d5ce400b7ffc2f30023d23979dcd';
const MY_PRIVATE_KEY = 'bdc959db0f0d32f79b80be7bd20782b36c635737';

const time = Number(new Date());

const hash = md5(time + MY_PRIVATE_KEY + MY_PUBLIC_KEY );

export default {
    getComics: async () => {
        const req = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${MY_PUBLIC_KEY}&hash=${hash}&offset=15600`)

        const json = await req.json();
        return json;
    },
    getCharacters: async () => {
        const req = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${MY_PUBLIC_KEY}&hash=${hash}`)

        const json = await req.json();
        return json;
    },
    getComic: async (id) => {
        const req = await fetch(`http://gateway.marvel.com/v1/public/comics/${id}?ts=${time}&apikey=${MY_PUBLIC_KEY}&hash=${hash}`)

        const json = await req.json();
        return json;
    },
    getOneComic: async (comicsearch) =>{
        const req = await fetch(`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${comicsearch}&ts=${time}&apikey=${MY_PUBLIC_KEY}&hash=${hash}`)

        const json = await req.json();
        return json;
        
    }   
}
