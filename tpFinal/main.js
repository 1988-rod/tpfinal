let lista;
fetch("../data.json")
  .then((resp) => {
    if (!resp.ok) {
      console.log("Error al cargar el archivo json.");
    } else {
      return resp.json();
    }
  })
  .then((data) => {
    lista = data;
  })
  .catch((error) => {
    console.log("Hubo un problema con el fetch.", error);
  });

function mostrarLista(list) {
  list.forEach((element) => {
    let div = document.createElement("div");
    div.id = element.id;
    div.innerHTML = `
            
            <ul>
            <li id=${element.id}>${element.nombre}  - Precio: $${element.precio}</li>

            </ul>

        `;
    document.body.append(div);
    document.getElementById("load-button").style.display = "none";
  });
}
