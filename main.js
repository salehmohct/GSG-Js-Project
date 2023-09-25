let formGenerator = document.getElementById("NameGenerator");
let nameText = document.getElementById("YourName");
let generateButton = document.getElementById("Generator");
const yourCard = document.getElementById("yourCard");
const clearAll = document.getElementById("clearAll");
let arrayOfName = [];
formGenerator.addEventListener("click", (e) => {
  e.preventDefault();
});
generateButton.addEventListener("click", () => {
  if (nameText.value !== "") {
    addName(nameText.value);
    nameText.value = "";
  }
  CreateElement(arrayOfName);
});
const addName = (text) => {
  const generateId = Math.floor(Math.random() * 1000);
  const Name = {
    title: text,
    id: generateId,
  };
  arrayOfName.push(Name);
};

const CreateElement = (arrayOfName) => {
  yourCard.innerHTML = "";
  arrayOfName.forEach((name) => {
    const div = document.createElement("div");
    div.className = "Card";
    div.setAttribute("taskid", name.id);
    const cardHrader = document.createElement("div");
    cardHrader.className = "cardHrader";
    const h1 = document.createElement("h1");
    const h1Text = document.createTextNode("HELLO");
    h1.appendChild(h1Text);
    const p = document.createElement("p");
    const pText = document.createTextNode("my name is");
    p.appendChild(pText);
    cardHrader.appendChild(h1);
    cardHrader.appendChild(p);
    const cardBody = document.createElement("div");
    cardBody.className = "cardBody";
    const NameText = document.createTextNode(name.title);
    cardBody.appendChild(NameText);
    const DeleteButton = document.createElement("button");
    DeleteButton.type = "button";
    DeleteButton.className = "deleteButton";
    DeleteButton.innerText = "Delete";
    div.appendChild(cardHrader);
    div.appendChild(cardBody);
    div.appendChild(DeleteButton);
    yourCard.appendChild(div);
  });
};

yourCard.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteButton")) {
    id = e.target.parentElement.getAttribute("taskid");
    // e.target.parentElement.remove();//delete from dom and still exist in array
    deleteButton(id); //delete from array
  }
});
const deleteButton = (id) => {
  arrayOfName = arrayOfName.filter((Name) => Name.id != id);
  CreateElement(arrayOfName);
};

clearAll.addEventListener("click", () => {
  //   yourCard.remove(); //delete from dom and still exist in array
  arrayOfName.length = 0; //delete from array
  CreateElement(arrayOfName);
});
