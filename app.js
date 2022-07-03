//Method 1: using promise to fetch
fetch("https://swapi.dev/api/people/1")   //fetch sends a request to URL first,then it returns a promise
  .then((res) => {
    console.log("RESOLVED", res);  //res has readable stream body so use res.json() 
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch("https://swapi.dev/api/people/2");
  })
  .then(res => {
    console.log("SECOND REQUEST RESOLVED!");
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });


  // Method 2 using async function to fetch
  const loadStarWarsPeople = async () => {
    try {
    const res1 = await fetch("https://swapi.dev/api/people/1");
    const data1 = await res1.json();
    console.log(data1);
    const res2 = await fetch("https://swapi.dev/api/people/2");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!!!", e);
  }
  }

  loadStarWarsPeople();