
module.exports = getDate;

function getDate() {
  let today =new Date();

 let options = {
   weekday: "long",
   day: "numeric",
   month: "long"
 };

return day = today.toLocaleDateString("en-US", options);

}

console.log(module.exports);
