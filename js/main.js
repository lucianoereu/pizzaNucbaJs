/* 
a)  Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes. */


//* Array */

const pizzas= [
    {
        nombre:"Muzarella",
        id:1,
        precio:1000,
        ingredientes:[
            "muzarella",
            "salsa",
            "masa"
        ]
    },
    {
        nombre:"Jamon Y Morron",
        id:2,
        precio:1200,
        ingredientes:[
            "muzarella",
            "salsa",
            "masa",
            "jamon",
            "morron"
        ]
    },
    {
        nombre:"Fugazza",
        id:3,
        precio:1100,
        ingredientes:[
            "muzarella",
            "salsa",
            "masa",
            "cebolla"
        ]
    },
    {
        nombre:"Napolitana",
        id:4,
        precio:1300,
        ingredientes:[
            "muzarella",
            "salsa",
            "masa",
            "tomate",
            "albahaca"
        ]
    },
    {
        nombre:"Tropical",
        id:5,
        precio:1500,
        ingredientes:[
            "muzarella",
            "salsa",
            "masa",
            "piña",
            "jamón",
            "azucar negra"
        ]
    },
    {
        nombre:"Calabrese",
        id:6,
        precio:1600,
        ingredientes:[
            "muzarella",
            "salsa",
            "masa",
            "Cantinpalo"
        ]
    },
    {
        nombre:"Vegetariana",
        id:7,
        precio:1600,
        ingredientes:[
            "muzarella",
            "salsa",
            "masa",
            "cebolla",
            "tomate",
            "morron",
            "albahaca",
            "zucchini",
            "champiñones",
            "choclo"
        ]
    },
    {
        nombre:"4 Quesos",
        id:8,
        precio:1800,
        ingredientes:[
            "muzarella",
            "salsa",
            "masa",
            "queso azul",
            "queso parmesano",
            "queso holanda"
        ]
    },
    {
        nombre:"De la casa",
        id:9,
        precio:2000,
        ingredientes:[
            "muzarella",
            "salsa",
            "masa",
            "panceta",
            "morron",
            "cebolla",
            "provoleta"
        ]
    },
    {
        nombre:"Pollito",
        id:10,
        precio:2300,
        ingredientes:[
            "muzarella",
            "salsa",
            "masa",
            "pollo",
            "cebolla",
            "jamon",
            "choclo"
        ]
    },
    {
        nombre:"Asado",
        id:11,
        precio:2500,
        ingredientes:[
            "muzarella",
            "salsa",
            "masa",
            "carne",
            "cebolla",
            "morron",
            "choclo"
        ]
    }
]

//*****console.log(pizzas);

//**** a)  Las pizzas que tengan un id impar.******/

console.log("a)  Las pizzas que tengan un id impar son:");
console.log(" ");

const pizzasImpares = pizzas.filter(pizza => pizza.id % 2 !== 0);
//*console.log(pizzasImpares);
pizzasImpares.forEach(pizza => console.log(`La pizza ${pizza.nombre} tiene un id impar y su id es ${pizza.id}`));

console.log(" ");
//**** b) ¿Hay alguna pizza que valga menos de $600?******/
console.log("b) ¿Hay alguna pizza que valga menos de $600?");

const pizzasMenosDe600 = pizzas.some(pizza => pizza.precio < 600);
if (pizzasMenosDe600) {
    console.log("Si hay pizzas que valen menos de $600");
} else {    
console.log(`Disculpa, no hay ninguna pizza que su precio sea menos de $600`);
}

console.log(" ");
//**** c) El nombre de cada pizza con su respectivo precio.******/

console.log("c) El nombre de cada pizza con su respectivo precio es:");
console.log(" ");
pizzas.forEach(pizza => console.log(`La pizza ${pizza.nombre} tiene un precio de $${pizza.precio}`));

console.log(" ");
//**** d) Todos los ingredientes de cada pizza ******/

console.log("d) Todos los ingredientes de cada pizza son:");
console.log(" ");
pizzas.forEach(pizza => {
    console.warn(`Los ingredientes de la pizza ${pizza.nombre} son:`);
    pizza.ingredientes.forEach(ingrediente => console.log(ingrediente));
    console.log(" ");
});

//**** E2 *****//

const numberValue = document.getElementById("numberId");
const buttonClick = document.getElementById("buttonId");
const result = document.getElementById("result");
const form = document.getElementById("formId");
const precio = document.getElementById("precio");


const mostrarPizza = () => {
    const number = parseInt(numberValue.value);
    const pizza = pizzas.find(pizza => pizza.id === number);
    if (pizza) {
        result.innerHTML = `La pizza ${pizza.nombre}`;
        precio.innerHTML = `tiene el valor de $${pizza.precio}`;
    } else if (numberValue.value === "") {
        result.innerHTML = `Por favor, ingrese un número`;
        precio.innerHTML = ``;
    } else {
        result.innerHTML = `No hay ninguna pizza con el id ${number}`;
        precio.innerHTML = ``;
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    mostrarPizza();
  });


