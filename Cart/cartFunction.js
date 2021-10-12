export function findItemById(id, goods){
    console.log(id, goods);
    for(let good of goods){

        if(good.id === id){
            return good;
        }
    }
}