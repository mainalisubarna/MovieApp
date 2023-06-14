import MovieCard from '@/components/MovieCard';
import FunctionalComp from '@/components/FunctionalComp';
import { fetchData } from '@/Helpers/GetData';
import { useEffect, useState } from 'react';
import { setMovies } from '@/slicer/movieSlicer';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const [searchValue,setSearchValue] = useState();
  const [sortValue,setSortValue] = useState();
  useEffect(()=>{
    fetchData('https://api.themoviedb.org/3/discover/movie').then((response) => {
      dispatch(setMovies(response.data.results));
    }).catch((error) => {
        console.log(error);
      });    
  },[])
  const searchMovie = async () =>{
    let query : string;
    if(searchValue && searchValue !== ""){
      query = `https://api.themoviedb.org/3/search/movie?query=${searchValue}`;
    }else{
      query = 'https://api.themoviedb.org/3/discover/movie';
    }
    try{
    const response = await fetchData(query);
    dispatch(setMovies(response.data.results));
  }catch(error){
    console.log(error);
  }
  }
  useEffect(()=>{
    searchMovie();
  },[searchValue])

  useEffect(() => {
    const debounceFN = setTimeout(() => {
      searchMovie();
    }, 500);
    return () => clearTimeout(debounceFN);
  }, [searchValue]);

  const sortChangeHandler = (e: any) => {
    setSortValue(e.target.value);
  };

  useEffect(()=>{
    fetchData(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=${sortValue}`).then((response) => {
      dispatch(setMovies(response.data.results));
    }).catch((error) => {
        console.log(error);
      });    
  },[sortValue])

  return (
    <>
      <div className='container flex flex-col gap-2 mx-auto my-1 align-item-cemter '>
<div className='items-center flex-1 mx-auto searchbar'>
  <input type="text" placeholder="Search the Movie" name='search' className="py-2 pl-4 pr-4 border border-gray-300 rounded-lg w-96 focus:outline-none focus:border-blue-500" onChange={(e: any) => setSearchValue(e.target.value)}/>
</div>
      <div className='flex flex-wrap flex-2 main-content'>
        <div className='my-1 flex-4'> 
          <FunctionalComp ChangeHandler ={sortChangeHandler}  />
        </div>
        <div className='mx-auto my-1 flex-6'>
            <MovieCard />
          </div>
        </div>
        </div>
    </>
  );
}
