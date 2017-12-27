import axios from 'axios'

class FBRankerAPI {

    constructor(url = 'http://localhost:4000/api') {

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

    getGroupPostReport(id) {
        return this.client.get('/groups/' + id + '/reports/posts');
    }

    addGroup(group) {
        return this.client.post('/groups', {group});
    }

    addPage(pageId) {
        return this.client.post('/pages', {page_id: pageId});
    }

    attachPageToGroup(groupId, pageId) {
        return this.client.post(`/groups/${groupId}/pages`, {page: pageId});
    }

    search(query) {
        return this.client.get('/pages/search', {params: {query}})
    }


}

export default new FBRankerAPI();