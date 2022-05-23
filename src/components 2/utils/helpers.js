export function plualize(name, count) {
  if (count === 1) {
    return product;
  }
  return product + "s";
}

export function idbPromise(storeProduct, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("shop-shop", 1);
    let db, tx, store;
    request.onupgradeneeded = function (e) {
      const db = request.result;
      db.createObjectStore("products", { keyPath: "_id" });
      db.createObjectStore("cart", { keyPath: "_id" });
    };
    request.oneerror = function (e) {
      console.log("There was an error");
    };
    request.onsuccess = function (e) {
      db = request.result;
      tx = db.transaction(storeProduct, "readwrite");
      store = tx.objectStore(storeProduct);

      db.onerror = function (e) {
        console.log("error", e);
      };

      switch (method) {
        case "put":
          store.put(object);
          resolve(object);
          break;
        case "get":
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.results);
          };
          break;
        case "delete":
          store.delete(object._id);
          break;
        default:
          console.log("No vaild method");
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
