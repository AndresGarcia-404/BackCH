async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  document.getElementById("signup").addEventListener("click", function () {
    let form = document.getElementById("form");
    postData("/api/pets", {
      owner: form.owner.value,
      name: form.name.value,
      type: form.type.value,
      age: form.age.value,
    }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
    form.submit();
  });
  