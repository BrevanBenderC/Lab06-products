import { items } from "../products";

export function findItemById(id, list){
    for(let item of list){

        if(list.id === id){
            return item;
        }
    }
}