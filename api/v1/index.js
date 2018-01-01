const addClass = (el, newClass) => {
    console.log('utility to add a class to an element');
   /*  if (el.className.indexOf(newClass) !== -1) {
        return;
    } */
    if (el.className !== '') {
        //ensure class names are separated by a space
        newClass = ' ' + newClass;
    }
    el.className += newClass;
}
module.exports = addClass;