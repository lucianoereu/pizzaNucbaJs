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

const pizzasImpares = pizzas.filter(pizza => pizza.id % 2 !== 0);
//*console.log(pizzasImpares);
pizzasImpares.forEach(pizza => console.log(`La pizza ${pizza.nombre} tiene un id impar y su id es ${pizza.id}`));

//**** b) ¿Hay alguna pizza que valga menos de $600?******/

const pizzasMenosDe600 = pizzas.some(pizza => pizza.precio < 600);
console.log(`Disculpa, no hay ninguna pizza que su precio sea menos de $600`);

//**** c) El nombre de cada pizza con su respectivo precio.******/

pizzas.forEach(pizza => console.log(`La pizza ${pizza.nombre} tiene un precio de $${pizza.precio}`));

//**** d) Todos los ingredientes de cada pizza ******/

pizzas.forEach(pizza => {
    console.log(`Los ingredientes de la pizza ${pizza.nombre} son:`);
    pizza.ingredientes.forEach(ingrediente => console.log(ingrediente));
});

