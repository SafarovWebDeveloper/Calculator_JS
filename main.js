window.addEventListener('load' , function(){

    var inp1= document.querySelector('input[name=num1]');
    var inp2= document.querySelector('input[name=num2]');
    var btn= document.querySelector('.btn');
    var btnClear = this.document.querySelector('.btn-clear');
    var select = document.querySelector('select');
    let h3 = this.document.querySelector('.h3');

    btn.addEventListener('click' , function(){
        var num1 = +inp1.value;
        var num2 = +inp2.value;
        var answer = '';

        switch(select.value){
            case 'plus':
                answer = num1 + num2;
                break;
            case 'min':
                answer = num1 - num2;
                break;
            case 'kop':
                answer = num1 * num2;
                break;
            case 'bol':
                answer = num1 / num2;
                break;        
        }
        this.disabled = true;
        h3.textContent = answer;
    });

    btnClear.addEventListener('click', ()=>{
        inp1.value = "";
        inp2.value = "";
        h3.textContent = "Result";


    });
    var refresh = [inp1 , inp2 , select] ;  //massiv

        for(var i = 0 ; i < refresh.length; i++){
            refresh[i].addEventListener('input' , ()=>{
                btn.disabled = false;
            });
        }   
        inp1.addEventListener('input' , control);
        inp2.addEventListener('input' , control);
        
        function control(){
            var pattern = /^(-){0,1}([0-9])*(\.){0,1}([0-9])*$/ /// asdf123.1235

            if(!pattern.test(this.value)){
                var numDot = this.value.replace(/[^0-9\.]/g,"");
                if(this.value[0] == '-'){
                    // numDot = numDot + '-'
                    numDot += '-';
                }
                if(pattern.test(numDot)){
                    this.value = numDot;     //-1234.123
                 }
                 else{
                     var firstDots = numDot.indexOf('.');
                     var secondDots = numDot.indexOf('.' , firstDots +1);
                     this.value = numDot.substr(0 , secondDots);
                 }
                console.log(numDot);
            }




            console.log(pattern.test(this.value));
        }


})