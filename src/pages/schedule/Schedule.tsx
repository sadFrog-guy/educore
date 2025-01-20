import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Template from "../template/Template.tsx";
import {Card, Col, Flex, Row, Radio, Typography, Divider, Space, Input, Select,} from "antd";
import {observer} from "mobx-react-lite";

import { Calendar, momentLocalizer, Views, DateLocalizer  } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

import 'moment/locale/ru';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import './Schedule.scss'

import ScheduleCard from "../../blocks/scheduleCard/ScheduleCard.tsx";
import events from "./resources/events.ts";
import formats from "./resources/formats.ts";
import resourceMap from "./resources/resourceMap.ts";

const DragAndDropCalendar = withDragAndDrop(Calendar)

const localizer = momentLocalizer(moment);

const Lessons = () => {
    const [myEvents, setMyEvents] = useState(events)

    const moveEvent = useCallback(({ event, start, end, resourceId, isAllDay: droppedOnAllDaySlot = false }) => {
        // Создаем копию события
        const updatedEvent = { ...event, start, end, resourceId, allDay: droppedOnAllDaySlot };

        setMyEvents((prev) => {
            // Находим индекс события
            const index = prev.findIndex((ev) => ev.id === updatedEvent.id);

            // Если событие не найдено, возвращаем массив без изменений
            if (index === -1) return prev;

            // Обновляем событие по индексу
            const updatedEvents = [...prev];
            updatedEvents[index] = updatedEvent;

            // Сортируем события по времени начала
            return updatedEvents.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
        });
    }, [setMyEvents]);

    const resizeEvent = useCallback(({ event, start, end }) => {
        setMyEvents((prev) => {
            // Находим индекс события
            const index = prev.findIndex((ev) => ev.id === event.id);

            // Если событие не найдено, возвращаем массив без изменений
            if (index === -1) return prev;

            // Обновляем событие по индексу
            const updatedEvents = [...prev];
            updatedEvents[index] = { ...event, start, end };

            // Сортируем события по времени начала
            return updatedEvents.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
        });
    }, [setMyEvents]);

    const handleSelectSlot = useCallback(({ start, end, resourceId, action }) => {
        if (action === 'click') return;

        const stepDuration = 15 * 60 * 1000; // 15 минут
        if (end - start <= stepDuration) return;

        const newEvent = { title: 'Новое событие', start, end, resourceId };

        setMyEvents((prev) => {
            const updatedEvents = [...prev, newEvent]; // Добавляем новое событие
            // Сортируем по времени начала
            return updatedEvents.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
        });
    }, [setMyEvents]);

    const { defaultDate, scrollToTime } = useMemo(
        () => ({
            defaultDate: new Date(2018, 0, 29),
            scrollToTime: new Date(1972, 0, 1, 6),
        }),
        []
    )

    const backgroundEvents =  [
        {
            id: 0,
            title: 'Преподаватель занят',
            start: new Date(2018, 0, 29, 6),
            end: new Date(2018, 0, 29, 8),
            resourceId: [1,2,3,4],
            isBackgroundEvent: true,
        },
    ]

    return (
        <Template>
            {/*<ActionBar actions={actions}/>*/}
            <Card bordered={false} size={'small'} style={{ userSelect: 'none !important'}}>
                <Flex vertical={true} gap={16}>
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="label"
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'tom',
                                label: 'Tom',
                            },
                        ]}
                        style={{height: '100%', width: '215px'}}
                    />
                    <Flex style={{
                        flexDirection: 'row', // Горизонтальное расположение элементов
                        overflowX: 'auto', // Включаем горизонтальный скроллинг
                        whiteSpace: 'nowrap', // Запрещаем перенос строк
                    }}>
                        <Space>
                            {myEvents.map((event) => {
                                const dayOfWeek = moment(event.start).format('dddd') // Получаем день недели, например, "понедельник"
                                const startTime = moment(event.start).format('HH:mm'); // Время начала события
                                const endTime = moment(event.end).format('HH:mm'); // Время конца события

                                return (
                                    <ScheduleCard
                                        key={startTime} // Добавляем уникальный ключ для списка
                                        day={dayOfWeek} // Устанавливаем день недели
                                        startTime={startTime} // Время начала
                                        endTime={endTime} // Время конца
                                        teacher="Адилет Касымбаев"
                                        room={event.title}
                                        size="small"
                                    />
                                );
                            })}
                        </Space>
                    </Flex>
                    <div style={{height: 600}}>
                        <DragAndDropCalendar
                            backgroundEvents={backgroundEvents}
                            defaultDate={defaultDate}
                            defaultView={Views.WEEK}
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
                            toolbar={false}
                            resourceGroupingLayout={true}
                        />
                    </div>
                </Flex>
            </Card>
        </Template>
    );
};

export default observer(Lessons);