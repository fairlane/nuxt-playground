import { User } from "~/types/types";
import { getRuntimeConfig } from "~/config/settings";

const listUsers = async (): Promise<User[]> => {
    const endpoint = getRuntimeConfig().apiUrl + '/list-users';
    return callApi(endpoint);
}

const searchUsers = async (searchTerm: string): Promise<User[]> => {
    const endpoint: string = getRuntimeConfig().apiUrl + '/search?s=' + searchTerm;
    return callApi(endpoint);
}

const callApi = async (url: string) => {
    return await (await fetch(url)).json();
}
export {listUsers, searchUsers}