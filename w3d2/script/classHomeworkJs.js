/*jshint esversion: 6  */

(function () {
    "use strict";

    window.onload = ()=>{
        let clock = new Clock({template: 'h:m:s'});
        document.getElementById("btnStartClock").onclick =()=> {
            clock.start();
        };
        document.getElementById("btnStopClock").onclick =()=> {
            clock.stop();
        };
    };

    function log(message) {
        console.log(message);
        let c = document.getElementById("console");
        if(c !== null && c !== undefined) {
            c.innerHTML += "<p>" + message.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>";
        }
    }

    class Clock{
        constructor({template}){
            this.template = template;
        }

        render(){
            let date = new Date();

            let hours = date.getHours();
            if(hours < 10){
                hours = '0' + hours;
            }
            let mins = date.getMinutes();
            if(mins < 10){
                mins = '0' + mins;
            }
            let secs = date.getSeconds();
            if(secs < 10){
                secs = '0' + secs;
            }

            let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            log(output);
        }


        stop(){

                clearInterval(this.timer);
        }

        start(){
            this.render();
            this.timer = setInterval(()=> this.render(), 1000);
        }
    }
})();