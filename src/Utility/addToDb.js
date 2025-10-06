const getStoredBook=()=>{
     const storeBookSTR=localStorage.getItem("readlist")

     if(storeBookSTR){
        const storedBookData=JSON.parse(storeBookSTR)
        return storedBookData
     }else{
        return [];
     }

}

const addStoredDB=(id)=>{
    const storedBook=getStoredBook()

    if(storedBook.includes(id)){
        alert("Item Alredy Exsisted")
    }else{
        storedBook.push(id)
        const data= JSON.stringify(storedBook)
        console.log(data)
        localStorage.setItem("readlist", data)
    }
}

export {addStoredDB};