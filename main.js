let userAge = prompt("Введите год своего рождения:");
if (userAge === null) {
    alert("Жаль, что вы не захотели ввести свой возраст!");
} else {
    let userCity = prompt("Введите город в которым вы проживаете?");
    if (userCity === null) {
        alert("Жаль, что вы не захотели ввести город проживания!");
    } else {
        let userSport = prompt("Введите свой любимый вид спорта:");
        if (userSport === null) {
            alert("Жаль, что вы не захотели ввести любимый вид спорта!");
        } else {
            let currentYear = new Date().getFullYear();
            let userFullAge = currentYear - userAge;

            let messageCity = "";
            switch (userCity) {
                case "Киев":
                    messageCity = "Ты живешь в столице Украины!";
                    break;
                case "Вашингтон":
                    messageCity = "Ты живешь в столице США!";
                    break;
                case "Лондон":
                    messageCity = "Ты живешь в столице Великобритании!";
                    break;
                default:
                    messageCity = `Ты живешь в городе ${userCity}.`;
            }

            let messageSport = "";
            switch (userSport) {
                case "Футбол":
                    messageSport = "Круто! Хочешь стать как Криштиану Роналду?";
                    break;
                case "Баскетбол":
                    messageSport = "Круто! Хочешь стать как Майкл Джордан?";
                    break;
                case "Хоккей":
                    messageSport = "Круто! Хочешь стать как Уэйн Гретцки?";
                    break;
                default:
                    messageSport = `Твой любимый спорт ${userSport}.`;
            }

            alert(`Твой возраст: ${userFullAge} лет.\n${messageCity}\n${messageSport}`);
        }
    }
}