// AJAX
// 1 - XMLHttpRequest
// function doAjax() {
//     const CODE_READY = 4;
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === CODE_READY) {
//             console.log('this.readyState', this.responseText);
//         }
//     };
//     xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/https://instagram.com/robots.txt');
//     xhttp.send();
// }
// setTimeout(doAjax, 5000);


// const ROBOT_TXT = 'https://cors-anywhere.herokuapp.com/https://instagram.com/robots.txt';

// 2 - jquery
{/* <script 
src="https://code.jquery.com/jquery-3.5.1.min.js"
integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" 
crossorigin="anonymous"
></script>

<script>
    function doAjax(){
        $.ajax({
            url: ROBOTS_TXT,
            success: function (result) {
                console.log(result)
            }
        })
    }


</script> */}




// 3 - axios
// const ROBOT_TXT = 'https://cors-anywhere.herokuapp.com/https://instagram.com/robots.txt';
// function doAjax() {
//     axios
//         .get(ROBOT_TXT)
//         .then(function (response) {
//             console.log(response.data);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

// 4 - fetch api
const ROBOT_TXT = 'https://cors-anywhere.herokuapp.com/https://instagram.com/robots.txt';
function doAjax() {
    fetch(ROBOT_TXT)
        .then((response) => response.text())
        .then((text) => console.log(text));
}






