class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length; 
    }

    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    
    if(!this.data[address]) {
      this.data[address] = [];
    }
    
    this.data[address].push([key, value]);

    return this.data;
  }
}

const myHashTable = new HashTable(20);
myHashTable.set("Cesar", 1989);
myHashTable.set("Martin", 1991);
myHashTable.set("Carlos", 1987);
myHashTable.set("Oscar", 1992);
myHashTable.set("Violeta", 1998);
myHashTable.set("Sebastian", 1989);
myHashTable.set("Nataly", 1989);
myHashTable.set("Diana", 1986);
myHashTable.set("Victor", 1985);
myHashTable.set("Alejandra", 2001);

console.log(myHashTable.data);