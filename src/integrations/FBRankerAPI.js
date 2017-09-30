import axios from "axios"

class FBRankerAPI {

    constructor(url = "https://immense-hamlet-15325.herokuapp.com/api") {

        this.client = this.createClient(url);

    }

    createClient(url) {
        return axios.create({
            baseURL: url
        });
    }

    getGroups() {
        return this.client.get('/groups');
    }

    getGroup(id) {
        return this.client.get('/groups/' + id);
    }

    getGroupPages(id) {
        return this.client.get('/groups/' + id + '/pages');
    }

    /**
     *
     * @param group
     * @returns {*|AxiosPromise}
     */
    addGroup(group) {
        return this.client.post('/groups', {group});
    }

    /**
     *
     * @param pageId
     * @returns {*|AxiosPromise}
     */
    addPage(pageId) {
        return this.client.post('/pages', {page_id: pageId});
    }

    /**
     *
     * @param groupId
     * @param pageId
     * @returns {*|AxiosPromise}
     */
    attachPageToGroup(groupId, pageId) {
        return this.client.post(`/groups/${groupId}/pages`, {page: pageId});
    }

    search(query) {
        return this.client.get('/pages/search', {params: {query}})
    }


}

export default new FBRankerAPI();