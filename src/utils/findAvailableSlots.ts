// Учитель
// График работы по дням недели
// Собрать свободное время от занятий в графике
// Предмет
//
// Активен
// Не на больничном
// Не в отпуске
// Не отпросился
// Кабинет
// Не занят
//
// Предпочтения группы
// Время
// Дни недели
// Длительность занятия
//
// Возможность взять за условие расширение рабочего графика учителя.
//     Игнорировать разовые занятия, но помечать что надо в этот день перенести регулярное занятие или разовое на другой день.

interface preferDays {
    days: preferDay[]
    start: number | null
}

interface preferDay {
    day: string;
    start: string;
    end: string;
}

function findAvailableSlots(groupPreferences) {

    const schedule = getDaySchedule(groupPreferences.days);
    const rooms = {}

    function getDaySchedule (days) {
        return {}
    }
}