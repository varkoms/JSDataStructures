class HashTable {
  constructor(size) {
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

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }

  remove(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedValue = this.data[address][i];
          this.data[address].splice(i, 1);
          return deletedValue;
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(20);

// Set hashtable
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

// Get elements
console.log(myHashTable.get("Alejandra"));

// Get All Keys
console.log(myHashTable.getAllKeys());

// Delete
console.log(myHashTable.remove("Oscar"));

// Get All Keys
console.log(myHashTable.getAllKeys());
