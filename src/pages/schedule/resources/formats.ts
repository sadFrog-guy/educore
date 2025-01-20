const formats = {
    timeGutterFormat: 'HH:mm', // Формат времени в боковой колонке
    eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
        `${localizer.format(start, 'HH:mm', culture)} - ${localizer.format(end, 'HH:mm', culture)}`, // Формат времени событий
    agendaTimeRangeFormat: ({ start, end }, culture, localizer) =>
        `${localizer.format(start, 'HH:mm', culture)} - ${localizer.format(end, 'HH:mm', culture)}`,

    // Формат для отображения только дней недели
    dayFormat: (date, culture, localizer) =>
        localizer.format(date, 'dddd', culture), // Только день недели, например "понедельник"
};
export default formats