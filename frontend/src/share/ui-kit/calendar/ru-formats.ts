import {Formats} from 'react-big-calendar'
import {toUpperCaseFirstChar} from '../../utils'

export const ruFormats: Formats = {
    monthHeaderFormat: (date,) => toUpperCaseFirstChar(date.toLocaleDateString('ru-RU', {
        month: 'long',
    })),
    weekdayFormat: (date) => toUpperCaseFirstChar(date.toLocaleDateString('ru-RU', {
        weekday: 'short'
    })),
    dayRangeHeaderFormat: ({
        start,
        end
    }) => `${start.getDate()} - ${end.getDate()} ${toUpperCaseFirstChar(start.toLocaleDateString('ru-RU', {
        month: 'long'
    }))}`,
    dayHeaderFormat: (date) => toUpperCaseFirstChar(date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: 'long',
        weekday: 'long'
    })),
    dayFormat: (date) => toUpperCaseFirstChar(date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        weekday: 'short'
    })),
    agendaDateFormat: date => toUpperCaseFirstChar(date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: 'short',
        weekday: 'short'
    })),
    timeGutterFormat: date => date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit'
    })
}
