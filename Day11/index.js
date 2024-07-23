const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1: Promise resolved after 2 seconds");
    }, 2000);
  });
  
  promise1.then(message => {
    console.log(message);
  });

  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Task 2: Promise rejected after 2 seconds"));
    }, 2000);
  });
  
  promise2.catch(error => {
    console.error(error.message);
  });
  

  const promise3a = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3: First promise resolved");
    }, 1000);
  });
  
  const promise3b = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3: Second promise resolved");
    }, 2000);
  });
  
  const promise3c = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3: Third promise resolved");
    }, 3000);
  });
  
  promise3a
    .then(message => {
      console.log(message);
      return promise3b;
    })
    .then(message => {
      console.log(message);
      return promise3c;
    })
    .then(message => {
      console.log(message);
    });

    

    async function task4() {
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Task 4: Promise resolved");
          }, 2000);
        });
      
        const result = await promise;
        console.log(result);
      }
      
      task4();

      

      async function task5() {
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error("Task 5: Promise rejected"));
          }, 2000);
        });
      
        try {
          const result = await promise;
          console.log(result);
        } catch (error) {
          console.error(error.message);
        }
      }
      
      task5();

      
      fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log("Task 6:", data);
  })
  .catch(error => {
    console.error("Task 6:", error);
  });

  async function task7() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log("Task 7:", data);
    } catch (error) {
      console.error("Task 7:", error);
    }
  }
  
  task7();
  

  const promise8a = new Promise((resolve) => {
    setTimeout(() => resolve("Task 8: Promise 1 resolved"), 1000);
  });
  
  const promise8b = new Promise((resolve) => {
    setTimeout(() => resolve("Task 8: Promise 2 resolved"), 2000);
  });
  
  const promise8c = new Promise((resolve) => {
    setTimeout(() => resolve("Task 8: Promise 3 resolved"), 3000);
  });
  
  Promise.all([promise8a, promise8b, promise8c])
    .then(values => {
      console.log("Task 8:", values);
    });

    
    const promise9a = new Promise((resolve) => {
        setTimeout(() => resolve("Task 9: Promise 1 resolved"), 1000);
      });
      
      const promise9b = new Promise((resolve) => {
        setTimeout(() => resolve("Task 9: Promise 2 resolved"), 2000);
      });
      
      const promise9c = new Promise((resolve) => {
        setTimeout(() => resolve("Task 9: Promise 3 resolved"), 3000);
      });
      
      Promise.race([promise9a, promise9b, promise9c])
        .then(value => {
          console.log("Task 9:", value);
        });
      
