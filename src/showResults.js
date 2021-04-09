import Services from "./services";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
    //await sleep(500);
    //window.alert(JSON.stringify(values));
    Services.sendVal(values.ids, values.pname, values.pemail);
});