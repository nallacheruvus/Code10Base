import axios from "axios";

class Services {
    sendVal(id, name, email) {
        axios.get("http://localhost:8089/ins/" + id + "/" + name + "/" + email).then(a => window.alert(JSON.stringify(a.data)));
    }

    getVals() {
        return axios.get("http://localhost:8089/tbls")
    }
}

export default new Services();