import type {SearchOptions} from "../../types";
import {smartSearch} from "../../data/dummy.ts";

export const searchAPI = async (query : SearchOptions): any[] => {
    const res = smartSearch(query);
    return Promise.resolve(res);
}