import { ActionType } from './actionTypes';


export const ShowSidebarCategories = (trueOrFalse: boolean) => {
    return {
        type: ActionType.SHOW_SIDEBAR_CATEGORIES, payload: trueOrFalse
    }
};

export const ShowSidebarMenu = (trueOrFalse: boolean) => {
    return {
        type: ActionType.SHOW_SIDEBAR_MENU, payload: trueOrFalse
    }
};

export const IsLoading = (value: boolean) => {
    return {
        type: ActionType.IS_LOADING, payload: value
    }
};

export const GetTitle = (title: string) => {
    return {
        type: ActionType.GET_TITLE, payload: title
    }
};

export const ShowSearchArea = (trueOrFalse: boolean) => {
    return {
        type: ActionType.SHOW_SEARCH_AREA, payload: trueOrFalse
    }
};

export const ShowOrHideDropdownCart = () => {
    return {
        type: ActionType.SHOW_OR_HIDE_DROPDOWNCART
    }
};

export const ShowSidebarFilter = (trueOrFalse: boolean) => {
    return {
        type: ActionType.SHOW_SIDEBAR_FILTER, payload: trueOrFalse
    }
};