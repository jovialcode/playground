import {modeChange} from "./DisplayMode";
import BGMManager from "@core/BGMManager";
import {DISPLAY_MODE, DISPLAY_MODE_TYPE} from "@type";

export function pageTheme(themeType: DISPLAY_MODE_TYPE){
    switch (themeType) {
        case DISPLAY_MODE.BLACK : {
            modeChange(DISPLAY_MODE.BLACK);
            break;
        }
        default : modeChange(DISPLAY_MODE.WHITE);
    }

    BGMManager.remove();
}

export function logMethod(
    target: Object,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor): PropertyDescriptor {

    const method = propertyDesciptor.value;

    propertyDesciptor.value = function (...args: any[]) {

        const params = args.map(a => JSON.stringify(a)).join();
        const result = method.apply(this, args);

        console.log(`[${target.constructor.name}에서 호출] - [함수명] ${propertyName} - [인자] (${params}) `);

        return result;
    }
    return propertyDesciptor;
};