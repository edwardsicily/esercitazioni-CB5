fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((e) =>
      console.log(
        `name: ${e.name} \naddress: ${e.address.street} \ncity: ${e.address.city}`
      )
    )
  )
  .catch((e) => console.log("Error:" + e));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((elem) => {
      console.log(`${elem.id}: ${elem.title}`);
    })
  )
  .catch((e) => console.log("Error:" + e));
