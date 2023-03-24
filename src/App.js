import './App.css';
import {useState,useEffect} from 'react';
import React from 'react';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {

  
  let [imagelink,setimagelink] = useState([]);
  let [name,setname] = useState([]);
  let [arrimage,setarrimage] = useState([]);
 


  useEffect(()=>{ getpokedata();},[])
  useEffect(()=> {getimage();},[imagelink])


  let arr


  async function getpokedata(){
    let data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0');
    let jsondata = await data.json();
    const pokemondata =jsondata.results;
    console.log(pokemondata);
    let pokemonnames=pokemondata.map((item)=>{
      return item.name 
    })
    let imageurls = pokemondata.map((item)=>{
       return item.url
    })
     //console.log(imageurls);
    
    setname(pokemonnames);
    setimagelink(imageurls)
  
  }



    
    function getimage(){
        let imagesarr= imagelink.map((item)=>{
        return (fetch(item).then((response1)=>{
          return response1.json()
        }))
      
       
      })
      console.log(imagesarr);
      arr = [];
      Promise.all(imagesarr).then((response1)=>{response1.map((item)=>{
        return arr.push(item.sprites.other.dream_world.front_default)
      })})
      // console.log(arr);
   
      setarrimage(arr)
  }

   
 

  return (
    <div className="App">
      <Header/>

   <Card arr = {arrimage} name = {name}/>
   <Footer/>


    </div>
  );
}

export default App;






