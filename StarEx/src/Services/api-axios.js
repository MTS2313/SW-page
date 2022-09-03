import axios from "axios";

const axinst = new axios.create({
    baseURL:"https://swapi.dev/api/"
});

export default axinst;