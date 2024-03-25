const randomData = () => {
    const names = ["JoLeanne Grahamhn", "Ervin Howell", "DClementine Bauchoe", "Patricia Lebsack", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Clementina DuBuque" ,"Glenna Reichert" , "Chelsey Dietrich" , "Nicholas Runolfsdottir V"];
    const items = (array) => array[Math.floor(Math.random() * array.length)];
    
    const data = [];
    for (let i = 0; i < 10; i++) {
      const name = items(names);
      const randomNumber = Math.floor(Math.random() * 10000000000).toString();
      const email = `${name.toLowerCase()}@example.com`;
      data.push({ name, mobile: randomNumber, email });
    }
    return data;
  };
  
 export const data = randomData();
  