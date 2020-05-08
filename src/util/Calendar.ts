import {ICalendarDay} from "../type/Calendar";

export const getPrevMonth = (d : Date) => {
    return new Date(d.getFullYear(), d.getMonth() - 1, d.getDate());
};

export const getNextMonth = (d : Date) =>{
    return new Date(d.getFullYear(), d.getMonth() + 1, d.getDate());
};
export const getFirstDayOfMonth = (d : Date) =>{
    return new Date(d.getFullYear(), d.getMonth(), 1);
};
export const getLastDayOfMonth = (d : Date) => {
    return new Date(d.getFullYear(), d.getMonth() + 1, 0);
};
export const get7DaysOfWeek = (d : Date, weekIndex: number) => {
    const day = d.getDay();
    let aWeek: ICalendarDay[] = [];

    //TODO 여기 보정해야함.
    for(let i = 0; i <7; i++){
        let j = i - day;
        const t = new Date(d.getFullYear(), d.getMonth(), j + weekIndex);
        const tDay = t.getDay();
        aWeek.push({
            name : t.getDate(),
            color : tDay === 0 ? 'red' : tDay === 6 ? '#588dff' : 'gray'
        })
    }

    return aWeek;
};

export const createCalendarDay = (s : Date, e : Date) => {
    const sDate = s.getDate();
    const eDate = e.getDate();
    let aMonth : ICalendarDay[][] = [];

     for(let i = sDate; i < eDate + 7; i += 7){
         const d = new Date(s.getFullYear(), s.getMonth(), i);
         aMonth.push(get7DaysOfWeek(d, i));
     }
     return aMonth;
}