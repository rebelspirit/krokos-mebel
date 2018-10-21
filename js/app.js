const addKitchen = (name, description, image) =>({name, description, image})

const kitchenData = [
[{name: 'Кухня Модерн', description: 'Кухня современная стиле модерн с островом (барной стойкой). Данная модель установлена в Киеве ЖК Заречный', image: 'img/kitchen4.jpg', modalId: '#modal-0', modalNumber: 'modal-0', modalDescription: 'Кухня современная стиле модерн с островом (барной стойкой). Данная модель установлена в Киеве ЖК Заречный. На вид 2 одинаковых изделия могут стоить по-разному. Это зависит от качества материалов, функциональности фурнитуры, автоматического или механического открывания, наличия выдвижных элементов, подсветки и множества других моментов. Поэтому, сравнивая цены, необходимо внимательно ознакомиться со спецификацией изделия, чтобы сравнить, что входит в цену, каких производителей материалы и фурнитура.'},
{name: 'secondName111', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-1', modalNumber: 'modal-1', modalDescription: 'secondDescription title'},
{name: 'thirsName111', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-2', modalNumber: 'modal-2', modalDescription: 'thirdDescription title'},
{name: 'foursName111', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-3', modalNumber: 'modal-3', modalDescription: 'foursDescription title'},
{name: 'fivesName111', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-4', modalNumber: 'modal-4', modalDescription: 'fivesDescription title'},
{name: 'sixsName111', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-5', modalNumber: 'modal-5', modalDescription: 'sixsDescription title'},
{name: 'sevensName111', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-6', modalNumber: 'modal-6', modalDescription: 'sevensDescription title'},
{name: 'eightsName111', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-7', modalNumber: 'modal-7', modalDescription: 'eightsDescription title'}],

[{name: 'firstName222', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-0', modalNumber: 'modal-0', modalDescription: 'firstDescription title'},
{name: 'secondName222', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-1', modalNumber: 'modal-1', modalDescription: 'secondDescription title'},
{name: 'thirsName222', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-2', modalNumber: 'modal-2', modalDescription: 'thirdDescription title'},
{name: 'foursName222', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-3', modalNumber: 'modal-3', modalDescription: 'foursDescription title'},
{name: 'fivesName222', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-4', modalNumber: 'modal-4', modalDescription: 'fivesDescription title'},
{name: 'sixsName222', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-5', modalNumber: 'modal-5', modalDescription: 'sixsDescription title'},
{name: 'sevensName222', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-6', modalNumber: 'modal-6', modalDescription: 'sevensDescription title'},
{name: 'eightsName222', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-7', modalNumber: 'modal-7', modalDescription: 'eightsDescription title'}],

[{name: 'firstName333', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-0', modalNumber: 'modal-0', modalDescription: 'firstDescription title'},
{name: 'secondName333', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-1', modalNumber: 'modal-1', modalDescription: 'secondDescription title'},
{name: 'thirsName333', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-2', modalNumber: 'modal-2', modalDescription: 'thirdDescription title'},
{name: 'foursName333', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-3', modalNumber: 'modal-3', modalDescription: 'foursDescription title'},
{name: 'fivesName333', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-4', modalNumber: 'modal-4', modalDescription: 'fivesDescription title'},
{name: 'sixsName333', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-5', modalNumber: 'modal-5', modalDescription: 'sixsDescription title'},
{name: 'sevensName333', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-6', modalNumber: 'modal-6', modalDescription: 'sevensDescription title'},
{name: 'eightsName333', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-7', modalNumber: 'modal-7', modalDescription: 'eightsDescription title'}],

[{name: 'firstName444', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-0', modalNumber: 'modal-0', modalDescription: 'firstDescription title'},
{name: 'secondName444', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-1', modalNumber: 'modal-1', modalDescription: 'secondDescription title'},
{name: 'thirsName444', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-2', modalNumber: 'modal-2', modalDescription: 'thirdDescription title'},
{name: 'foursName444', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-3', modalNumber: 'modal-3', modalDescription: 'foursDescription title'},
{name: 'fivesName444', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-4', modalNumber: 'modal-4', modalDescription: 'fivesDescription title'},
{name: 'sixsName444', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-5', modalNumber: 'modal-5', modalDescription: 'sixsDescription title'},
{name: 'sevensName444', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-6', modalNumber: 'modal-6', modalDescription: 'sevensDescription title'},
{name: 'eightsName444', description: 'some text', image: 'img/kitchen1.jpg', modalId: '#modal-7', modalNumber: 'modal-7', modalDescription: 'eightsDescription title'}],

[{name: 'firstName555', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-0', modalNumber: 'modal-0', modalDescription: 'firstDescription title'},
{name: 'secondName555', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-1', modalNumber: 'modal-1', modalDescription: 'secondDescription title'},
{name: 'thirsName555', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-2', modalNumber: 'modal-2', modalDescription: 'thirdDescription title'},
{name: 'foursName555', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-3', modalNumber: 'modal-3', modalDescription: 'foursDescription title'},
{name: 'fivesName555', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-4', modalNumber: 'modal-4', modalDescription: 'fivesDescription title'},
{name: 'sixsName555', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-5', modalNumber: 'modal-5', modalDescription: 'sixsDescription title'},
{name: 'sevensName555', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-6', modalNumber: 'modal-6', modalDescription: 'sevensDescription title'},
{name: 'eightsName555', description: 'some text', image: 'img/kitchen4.jpg', modalId: '#modal-7', modalNumber: 'modal-7', modalDescription: 'eightsDescription title'}],
];

var app = new Vue({
  el: '#app',
  data: {
    title: '',
    kitchenData: kitchenData,
    test: kitchenData[0]
  },
  methods: {
    testArr: function() {
      let arr = [];
      arr.push(kitchenData[0])
      this.test = arr
      
      return this.test
    },
    buttonClear: function () {
      let btn = document.querySelectorAll('.numbersArr');
      for(let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active")
      }
    },
    buttonActive: function(buttonClicked) {      
      setTimeout(
        function() { 
          buttonClicked.classList.add("active");
        }, 0);
    },
    slider: function (arr) {
          if(this.test.length > 0){
              this.test = []

              for (let i = 0; i < 8; i++) {
                this.test.push(arr[i])
              } 
          } 
        this.buttonClear();
      } 
    },
  })
