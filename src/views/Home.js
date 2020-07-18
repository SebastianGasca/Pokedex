import React, { useState, useEffect } from 'react';

const Home = props => {

    const [name, setname] = useState(true);
    const [pokemon, setpokemon] = useState([
        { nombre: "pikachu", tipo: "electrico" },
        { nombre: "vinasour", tipo: "hoja" },
        { nombre: "pinsir", tipo: "bicho" }
    ])
    const [pokeApi, setpokeApi] = useState([])
    const [pokeApiImg, setpokeApiImg] = useState()
    const [position, setposition] = useState()

    const getNamePoke = async () => {
        const request = await fetch('https://pokeapi.co/api/v2/pokemon?limit=99')
        const data = await request.json()
        setpokeApi(data.results)
        console.log(data.results)
    }
    
   /*  const getImgPoke = async () => {
        const request = await fetch ("https://pokeres.bastionbot.org/images/pokemon/poke_id.png")
        const data = await request.json()
        setpokeApiImg(data)
        console.log (data)
    }
 */

    useEffect(() => {
        getNamePoke()
        /* getImgPoke() */
    }, []);

    const imagen = (x)=> {
        return( <img width="150" src={`https://pokeres.bastionbot.org/images/pokemon/${x}.png`}/> )
    }
    /* return(
       pokemon.map((i)=>{return <div className="btn btn-danger">"{i.nombre}"</div> })  
       )  */

    return (
        <div className="container">
            <div id="fila0"className="row">
                <div className="col-md-12 border pd-0 mr-0">
                    <h1 className=""> Pokedex</h1>
                </div>
            </div>

            <div id="base" className="row">
                <div className="container">

                    <div id="fila1" className="row">
                        <div className="col-4"> <button id="circulo" onClick={() => setname(!name)}></button> </div>
                    </div>

                    <div id="fila2" className="row">
                        <div id="colu1" className="col">
                            {/*  hola como estay cochino qlo la peliai? que weaaa! yapo pokemon qlo tirate encima */}
                            {/* { name ? pokemon[1].nombre : pokemon[2].nombre } */}
                            {/* {pokemon.map((i) => {return <div className="">{i.nombre}</div>} */}
                            {/* {name? pokemon.map((i) => {return <div className="">{i.nombre}</div> }): pokemon.map((i) => { return <div className="">{i.tipo}</div> })}*/}
                            
                            {pokeApi.map((i, index) => {
                                return (<div className="poke"  onClick={()=> setposition(index+1) }>{i.name}</div>)
                            })}

                        </div>


                        <div id="colu2" className="col">
                             {imagen(position)}
                        </div>
    
                    </div>                            
                </div>
            </div>

        </div>
    )
}

export default Home;