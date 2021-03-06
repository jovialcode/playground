export enum DayOfWeek{
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY'
}

export type DayOfWeekType =
    'SUNDAY'
    |'MONDAY'
    |'TUESDAY'
    |'WEDNESDAY'
    |'THURSDAY'
    |'FRIDAY'
    |'SATURDAY'

export enum ShortDayOfWeek{
    SUN = 'SUN',
    MON = 'MON',
    TUE = 'TUE',
    WED = 'WED',
    THU = 'THU',
    FRI = 'FRI',
    SAT = 'SAT'
}

export enum IndexOfDay{
    SUN,
    MON,
    TUE,
    WED,
    THU,
    FRI,
    SAT
}

export type ShortDayOfWeekType =
    'SUN'
    |'MON'
    |'TUE'
    |'WED'
    |'THU'
    |'FRI'
    |'SAT'

export interface ICalendarDayOfWeek{
    name : ShortDayOfWeekType,
    color : string,
}

export interface ICalendarDay{
    name : number,
    color : string,
}