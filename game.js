// Инициализация игры
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

// Загрузка ресурсов
function preload() {
    this.load.image('bg', 'bg.png'); // Фон
    this.load.image('key', 'key.png'); // Ключ
    this.load.spritesheet('hero', 'hero.png', { frameWidth: 32, frameHeight: 48 }); // Герой
    this.load.image('phone', 'phone.png'); // Телефон
}

// Создание объектов
function create() {
    // Проверим, что сцена загружена правильно
    console.log(this); // Должен вывести объект сцены

    // Добавление фона
    this.add.image(400, 300, 'bg');  // Устанавливаем фон
    this.hero = this.physics.add.sprite(100, 100, 'hero'); // Герой
    this.phone = this.physics.add.sprite(400, 200, 'phone'); // Телефон

    // Взаимодействие с телефоном
    this.physics.add.overlap(this.hero, this.phone, interactWithPhone, null, this);

    // Ввод для мобильных устройств
    this.input.on('pointerdown', moveHero, this);
}

// Движение героя
function moveHero(pointer) {
    // Перемещаем героя в точку, на которую кликнули
    this.hero.x = pointer.x;
    this.hero.y = pointer.y;
}

// Взаимодействие с телефоном
function interactWithPhone(hero, phone) {
    phone.disableBody(true, true);  // Отключаем телефон
    console.log("Жена просит прийти в парк.");
}

// Обновление (если нужно)
function update() {
    // Дополнительная логика (если нужна анимация или действия)
}
