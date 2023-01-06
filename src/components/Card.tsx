import { Repository } from '../hooks/types';
import { useFavoriteReposStore } from '../store/favoriteRepos';

type CardProps = {
    repository: Repository,
    isFavorite: boolean
}

function Card({repository,isFavorite}:CardProps) {

    const addFavoriteRepo = useFavoriteReposStore((state)=> state.addFavoriteRepo);
    const removeFavoriteRepo = useFavoriteReposStore((state)=> state.removeFavoriteRepo);

    const toggleFavorite = () =>{
        if(isFavorite){
            removeFavoriteRepo(repository.id);
            return;
        }
        addFavoriteRepo(repository.id);
    }

    return (
        <div>
            <h2>Repo: {repository.name} </h2>
            <button onClick={toggleFavorite}>{isFavorite?"Dislike":"Like"}</button>
        </div>
    )

}

export default Card