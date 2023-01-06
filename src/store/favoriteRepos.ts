import create from "zustand";
import {persist} from 'zustand/middleware';

type favoriteReposState = {
    favoriteReposIds: number[],
    addFavoriteRepo: (id:number) => void,
    removeFavoriteRepo: (id:number) => void,
}

//estado local FRONTEND
export const useFavoriteReposStore = create(persist<favoriteReposState>(
    (set) => ({
        favoriteReposIds: [],
        addFavoriteRepo: (id:number) => set((state)=> ({//mando el id
            favoriteReposIds: [...state.favoriteReposIds, id] //hago una copia del state & add new id
        })),
        removeFavoriteRepo: (id:number) => set((state)=> ({//mando el id a eliminar
            favoriteReposIds: state.favoriteReposIds.filter((repoId)=> repoId !== id ) //buscando todos los != id a eliminar
        }))
    }),
    {
        name:'favorite-repos'
    }
))