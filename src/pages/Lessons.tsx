import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Template from "./template/Template.tsx";
import ActionBar from "../modules/layout/ActionBar.tsx";
import {Card, Col, Flex, Row, Radio, Typography, Divider} from "antd";
import {observer} from "mobx-react-lite";

import { Calendar, momentLocalizer, Views, DateLocalizer  } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ru';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Storybook cannot alias this, so you would use 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
moment.locale('ru');

const DragAndDropCalendar = withDragAndDrop(Calendar)

const localizer = momentLocalizer(moment);


const events = [
    {
        id: 0,
        title: 'Board meeting',
        start: new Date(2018, 0, 29, 9, 0, 0),
        end: new Date(2018, 0, 29, 13, 0, 0),
        resourceId: 1,
    },
    {
        id: 1,
        title: 'MS training',
        start: new Date(2018, 0, 29, 14, 0, 0),
        end: new Date(2018, 0, 29, 16, 30, 0),
        resourceId: 2,
    },
    {
        id: 2,
        title: 'Team lead meeting',
        start: new Date(2018, 0, 29, 8, 30, 0),
        end: new Date(2018, 0, 29, 12, 30, 0),
        resourceId: 3,
    },
    {
        id: 3,
        title: 'Team lead meeting',
        start: new Date(2018, 0, 29, 8, 30, 0),
        end: new Date(2018, 0, 29, 12, 30, 0),
        resourceId: 3,
    },
    {
        id: 4,
        title: 'Team lead meeting',
        start: new Date(2018, 0, 29, 8, 30, 0),
        end: new Date(2018, 0, 29, 12, 30, 0),
        resourceId: 3,
    },
    {
        id: 10,
        title: 'Board meeting',
        start: new Date(2018, 0, 30, 23, 0, 0),
        end: new Date(2018, 0, 30, 23, 59, 0),
        resourceId: 1,
    },
    {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2018, 0, 30, 7, 0, 0),
        end: new Date(2018, 0, 30, 10, 30, 0),
        resourceId: 4,
    },
]

const resourceMap = [
    { resourceId: 1, resourceTitle: 'Board room' },
    { resourceId: 2, resourceTitle: 'Training room' },
    { resourceId: 3, resourceTitle: 'Meeting room 1' },
    { resourceId: 4, resourceTitle: 'Meeting room 2' },
]

// Получаем текущую дату
const today = new Date();
const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0);
const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59);

const formats = {
    timeGutterFormat: 'HH:mm', // Формат времени в боковой колонке
    eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
        `${localizer.format(start, 'HH:mm', culture)} - ${localizer.format(end, 'HH:mm', culture)}`, // Формат времени событий
    agendaTimeRangeFormat: ({ start, end }, culture, localizer) =>
        `${localizer.format(start, 'HH:mm', culture)} - ${localizer.format(end, 'HH:mm', culture)}`,
};

const Lessons = () => {
    const [myEvents, setMyEvents] = useState(events)
    const [copyEvent, setCopyEvent] = useState(false)

    const toggleCopyEvent = useCallback(() => setCopyEvent((val) => !val), [])

    const moveEvent = useCallback(
        ({
             event,
             start,
             end,
             resourceId,
             isAllDay: droppedOnAllDaySlot = false,
         }) => {
            // Создаем копию события, чтобы избежать мутаций
            const updatedEvent = { ...event };

            // Если событие переместили на слот "весь день"
            if (!updatedEvent.allDay && droppedOnAllDaySlot) {
                updatedEvent.allDay = true;
            }

            // Устанавливаем новый ресурс для события (только один ресурс)
            updatedEvent.resourceId = resourceId;

            // Обновляем состояние событий
            setMyEvents((prev) => {
                // Удаляем старую версию события
                const filtered = prev.filter((ev) => ev.id !== updatedEvent.id);
                // Добавляем обновленное событие
                return [...filtered, { ...updatedEvent, start, end }];
            });
        },
        [setMyEvents]
    );

    const resizeEvent = useCallback(
        ({ event, start, end }) => {
            // @ts-ignore
            setMyEvents((prev) => {
                const existing = prev.find((ev) => ev.id === event.id) ?? {}
                const filtered = prev.filter((ev) => ev.id !== event.id)
                return [...filtered, { ...existing, start, end }]
            })
        },
        [setMyEvents]
    )

    const handleSelectSlot = useCallback(
        ({ start, end, resourceId, action }) => {
            // Ожидаем, что событие будет создаваться только при выделении области (drag or click-and-drag)
            if (action === 'click') {
                return; // Не создаем событие при обычном клике
            }

            // Проверка: если начало и конец события находятся в одном шаге (step)
            const stepDuration = 15 * 60 * 1000; // Шаг времени в миллисекундах (15 минут)
            const eventDuration = end - start;

            if (eventDuration <= stepDuration) {
                return; // Не создаем событие, если оно меньше одного шага
            }

            // Создаем новое событие в выбранном ресурсе
            const newEvent = {
                title: "Новое событие",
                start,
                end,
                resourceId, // Устанавливаем resourceId в зависимости от выделенного ресурса
            };

            // @ts-ignore
            setMyEvents((prev) => [...prev, newEvent]);
        },
        [setMyEvents]
    );

    const { defaultDate, scrollToTime } = useMemo(
        () => ({
            defaultDate: new Date(2018, 0, 29),
            scrollToTime: new Date(1972, 0, 1, 6),
        }),
        []
    )
    return (
        <Template>
            <ActionBar/>
            <Card bordered={false} size={'small'}>
                <div style={{height: 700}}>
                    <DragAndDropCalendar
                        defaultDate={defaultDate}
                        defaultView={Views.DAY}
                        events={myEvents}
                        localizer={localizer}
                        onEventDrop={moveEvent}
                        onEventResize={resizeEvent}
                        resizable
                        resourceIdAccessor="resourceId"
                        resources={resourceMap}
                        resourceTitleAccessor="resourceTitle"
                        scrollToTime={scrollToTime}
                        onSelectSlot={handleSelectSlot}
                        selectable
                        showMultiDayTimes={true}
                        step={15}
                        formats={formats}
                        min={new Date(1970, 1, 1, 6, 0)} // Начало дня в 6 утра
                        max={new Date(1970, 1, 1, 22, 0)}
                        popup={true}
                    />
                </div>
            </Card>
        </Template>
    );
};

export default observer(Lessons);