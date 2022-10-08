import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
const API_KEY='stV67nDEoJN1wFl9sOpLnJd3AalDhGW2';
const useFetch = ({keyword}) => {
 const [gifyUrl,setgifyUrl]=useState("");
 const fetchGify=async()=>{
    try{
      const res=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
      const {data}=await res.json();
      setgifyUrl(data[0]?.images?.downsized_medium.url);
    }catch(err){
        setgifyUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    }
 }
 useEffect(()=>{
  if(keyword) fetchGify();
 },[keyword]);
 return gifyUrl;
}

export default useFetch