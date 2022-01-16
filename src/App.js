import React, { useEffect, useLayoutEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css'
import MovieRow from "./components/MovieRow";
import FeatureMovie from './components/FeatureMovie'
import Header from './components/Header';

export default () => {


  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(()=>{ 
    const loadAll = async () => {

    //pegando a lista TOTAL
    let list = await Tmdb.getHomeList();
    setMovieList(list);

    //pegando o filme em destaque - feature
    let originals = list.filter(i=>i.slug === 'originals');
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieinfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
    

  }

  loadAll();
}, []);

useEffect(()=>{
  const scrollListener = () => {
    if(window.scrollY > 30) {
      setBlackHeader(true);
    }else {
      setBlackHeader(false);
    }

}
window.addEventListener('scroll', scrollListener);

return () => {
  window.addEventListener('scroll', scrollListener);

  }
}, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

    {featureData &&
        <FeatureMovie item={featureData}  />
    }
      <section className="lists">
        {movieList.map( (item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />    
           
        ))}  
      </section>

      <footer>
        Programado com <span role="img" aria-label="coração">❤️</span> por <em>Cristiano Camacho </em> <br/>
        Direitos de imagem para Netflix | Dados retirados do site themoviedb.org
      </footer>
    </div>
  );
}