const express = require('express');
const router = express.Router();

const pizzas = [
    { name: "Маргарита" },
    { name: "Пепероні" },
    { name: "Гавайська" },
    { name: "Чотири сири" },
    { name: "Карбонара" },
    { name: "Вегетаріана" },
    { name: "М'ясна" },
    { name: "Грибна" },
    { name: "Морська" },
    { name: "Капрічоза" }
];

router.get('/', (req, res) => {
  res.render('pizza', { title: 'Меню піци', pizzas: pizzas });
});

router.post('/order', (req, res) => {
    const pizzaName = req.body.pizzaName;
    const name = req.body.name;
    const phone = req.body.phone;
    const address = req.body.address;
    
    res.send(`Дякуємо за замовлення, ${name}! Ви замовили піцу "${pizzaName}" на адресу "${address}". Ми зв'яжемося з вами за номером ${phone}`);
  });

module.exports = router;