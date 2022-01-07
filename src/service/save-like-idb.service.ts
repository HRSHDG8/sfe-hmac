import {openDB} from "idb"
const LIKES_STORE = 'likes'
const DB_NAME = 'spacestagram'


const idb = openDB(DB_NAME, 1,{
    upgrade:(db,oldVersion,newVersion,transaction)=>{
        db.createObjectStore(LIKES_STORE);
    }
})

export const getSavedLikes=()=>{
    return idb.then(db=>db.getAllKeys(LIKES_STORE))
}

export const like=(id: string)=>{
    idb.then(db=>db.put(LIKES_STORE, true, id));
}

export const unlike=(id: string)=>{
    idb.then(db=>db.delete(LIKES_STORE, id));
}