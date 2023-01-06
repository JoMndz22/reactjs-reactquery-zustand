import Card from './components/Card';
import { useFetchRepositories } from './hooks/useRepos';
import { useFavoriteReposStore } from './store/favoriteRepos';

function App() {

  const {data,isLoading} = useFetchRepositories('JoMndz22');
  const {favoriteReposIds} = useFavoriteReposStore();
  
  if(isLoading) return <div>Cargando....</div>
  console.log(data);

  return (
    <div>
      {
        data?.map( repo =>(
          <Card 
            key={repo.id}
            repository={repo} 
            isFavorite={ favoriteReposIds.includes(repo.id) } //busca dentro del array el id en loop
          />
        ))
      }
    </div>
  )
}

export default App