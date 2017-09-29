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

    addGroup(group) {
        console.log("Pino");
        return this.client.post('/groups', {group});
    }

    search(query) {
        return this.client.get('api/pages/search', {query})
    }


}

export default new FBRankerAPI();