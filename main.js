let seconds_one = document.getElementById("seconds_one");
let seconds_two = document.getElementById("seconds_two");

let minutes_one = document.getElementById("minutes_one");
let minutes_two = document.getElementById("minutes_two");

let hours_one = document.getElementById("hours_one");
let hours_two = document.getElementById("hours_two");

seconds_one.appendChild(test(9));
seconds_two.appendChild(test(5));

minutes_one.appendChild(test(9));
minutes_two.appendChild(test(5));

hours_one.appendChild(test(9));
hours_two.appendChild(test(5));

function test(j){
    count = document.createElement("div");
    for(i=j;i>=0;i--){
        tmp = document.createElement("div");
        tmp.innerHTML = i + " ";
        count.appendChild(tmp);
    }
    return count;
}
let second_one_timer = 0;
let second_two_timer = 0;
let minutes_two_timer = 0;
let minutes_one_timer = 0;
let hours_two_timer = 0;
let hours_one_timer = 0;
let x = setInterval(
    function (){
        if(second_one_timer >= 9){
            second_one_timer = 0;
            if(second_two_timer >= 5){
                second_two_timer = 0;
                if(minutes_one_timer >= 9){
                    minutes_one_timer = 0;
                    if(minutes_two_timer >= 5){
                        minutes_two_timer = 0;
                        if(hours_one_timer >= 9){
                            hours_one_timer = 0;
                            if(hours_two_timer >= 5){
                                hours_one_timer = 0;
                                hours_two_timer = 0;
                                second_one_timer = 0;
                                second_two_timer = 0;
                                minutes_two_timer = 0;
                                minutes_one_timer = 0;
                            }
                        }
                        else hours_one_timer++;
                    }
                    else
                        minutes_two_timer++;
                }
                else{
                    minutes_one_timer++;
                }
            }
            else
                second_two_timer++;
        }
        seconds_one.style.transform = 'translateY(' + second_one_timer * 28 + 'px)';
        second_one_timer ++;
        //console.log(second_one_timer * 28  + "px");
    }
, 1000);
let h = setInterval(
    function(){
        second_two_txt = parseFloat(second_two_timer) * 28 + 28 * 4;
        seconds_two.style.transform = 'translateY('+ second_two_txt + 'px)';
        //console.log('translateY(' + parseFloat(second_two_timer * 28) + parseInt(28 * 3) + 'px)');
        minutes_one.style.transform = 'translateY(' + parseFloat(parseFloat(minutes_one_timer) * 28) + 'px)'; 
        minutes_two.style.transform = 'translateY(' + parseFloat(parseFloat(minutes_two_timer) * 28 + (28 * 4)) + 'px)';
        hours_one.style.transform = 'translateY(' + parseFloat(parseFloat(hours_one_timer) * 28) + 'px)'; 
        hours_two.style.transform = 'translateY(' + parseFloat(parseFloat(hours_two_timer) * 28 + (28 * 4)) +'px)';

    }
,15);