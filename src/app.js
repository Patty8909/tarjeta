$('.carousel').carousel()

var app = new Vue({
    el: '#app',
    data: {
      todos: [
        {
            firstName: 'aeiou',
            lastName: 'Doe',
            age: 9,
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpzyWlRX_uz04M8XihFDMcRDmlPVrT_EvNY5RQXzxluSBasRx'
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            age: 5,
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpzyWlRX_uz04M8XihFDMcRDmlPVrT_EvNY5RQXzxluSBasRx'
        },
        {
            firstName: 'xzytu',
            lastName: 'Doe',
            age: 3,
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpzyWlRX_uz04M8XihFDMcRDmlPVrT_EvNY5RQXzxluSBasRx'
        }
      ]
    }
  });