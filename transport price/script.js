const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg',
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg',
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg',
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png',
    },
];

// - Создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice()

class Transport {
    constructor(type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }

    getInfo() {
        return `Information: transport - ${this.type}, brand - ${this.brand}`;
    }

    getPrice() {
        return `Price: ${this.price}`;
    }
}
// - Создать класс Car, который наследует от Transport. Этот класс должен содержать  метод getDoorsCount() , который возвращает количество дверей

class Car extends Transport {
    constructor(price, brand, doors, image) {
        super('car', price, brand, image);
        this.doors = doors;
    }

    getInfo() {
        return `${super.getInfo()}; ${this.getDoorsCount()}`;
    }

    getDoorsCount() {
        return `door\`s count: ${this.doors}`;
    }
}

// - Создать класс Bike, который наследует от Transport. Этот класс должен содержать  метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла

class Bike extends Transport {
    constructor(price, brand, maxSpeed, image) {
        super('bike', price, brand, image);
        this.maxSpeed = maxSpeed;
    }

    getInfo() {
        return `${super.getInfo()}; ${this.getMaxSpeed()}`;
    }

    getMaxSpeed() {
        return `max speed: ${this.maxSpeed}`;
    }
}

const transportData = data.map((item) => {
    switch (item.type) {
        case 'car':
            return new Car(item.price, item.brand, item.doors, item.image);
        case 'bike':
            return new Bike(item.price, item.brand, item.maxSpeed, item.image);
    }
});

const container = document.querySelector('.container');

transportData.forEach((transport) => {
    const divMain = document.createElement('div');
    const divInfo = document.createElement('div');
    divInfo.textContent = transport.getInfo();
    const divPrice = document.createElement('div');
    divPrice.textContent = transport.getPrice();
    const img = document.createElement('img');
    img.setAttribute('src', transport.image);
    divMain.append(divInfo, divPrice, img);
    container.appendChild(divMain);
    divMain.classList.add('divMain');
});
