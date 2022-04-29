const getHash = () => 
    location.hash.slice().toLocaleLowerCase().split('/')[1] || '/';
    
    export default getHash;