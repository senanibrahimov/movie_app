import { Movie } from '../Movie/Movie'; 
import './Movies.css';

export function Movies({movie, wdth}){ 
    console.log(wdth); 
    return(
      
        <div className='Movies' style={{width: wdth}}>
            { movie !== undefined && !!movie.length && movie.map((item) => {
          return <Movie props={item} key={item.imdbID}/>
        })}
        </div>
    );
}