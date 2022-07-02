const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

//String 문자열을 포함한 변수를 담을때는 대문자로 표현하는 관행이 있다.
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'User ID';

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //이제 form의 submit event를 감지함. submit은 엔터나 버튼을 클릭할때 발생함.
    loginForm.addEventListener('submit',onLoginSubmit);

}else{
    //show greeting
    paintGreetings(savedUserName);
}


function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; // 문자열에 ${변수}를 넣고 싶다면 그냥 따옴표'가 아니라 `백틱을 사용해야됨.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



function onLoginSubmit(event){
    /*  submit 하면 브라우저가 submit 했을때의 기본동작들을 실행한다.(그중에 페이지를 새로고침하는 것이 있음)
        그걸 막으려면 event를 인자로 전달하고( 아무말이나 상관없지만 이게 관행임. )
        event.preventDefault();메소드로 브라우저의 기본동작을 막아주면 새로고침이 실행되지 않는다.
    */
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName); // localStorage.setItem(key,value);
    paintGreetings(userName);    
    
    console.log(userName);

}



//JS는 함수를 실행할때 그냥 실행하지 않고 파라미터를 통해 지금 어떤일이 일어났는지 정보들을 제공한다. 지금 클릭한게 MouseEvent 라든지 screenX : 180 처럼 위치가 어떻다든지 하는 정보들을 돌려준다.
//그래서 function fwjfuhfwf(event){} 이런식으로 event든 뭐든 인자를 적으면 그 정보들에 접근해서 받아올 수 있는것.
// event.preventDefault();같은 메소드들을 써서 브라우저의 동작을 막을 수 있다.