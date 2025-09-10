var rand = function () {
    return Math.random().toString(36).substr(2); // remove `0.`
};

var randNew = function () {
    return Math.random().toString(36).substr(2).substr(0, 4).toUpperCase(); // remove `0.`
};


var TokenGenerate = function () {
    return randNew() + "-" + randNew();// + rand() + rand() + "-" + rand() + rand() + rand(); // to make it longer
};
export default TokenGenerate;