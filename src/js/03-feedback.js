import throttle from "lodash.throttle";

const ref = {
    formEl: document.querySelector('.feedback-form'),
}

const { elements: { email, message } } = ref.formEl;

ref.formEl.addEventListener('input', throttle(function () {
    const user = {
        [email.name]: email.value,
        [message.name]: message.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(user));
}, 500));

ref.formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log(checkParse());
    localStorage.clear();
    event.target.reset();
})

function checkStorage() {
    const isStorage = checkParse();

    if (isStorage !== null) {
        email.value = isStorage.email;
        message.value = isStorage.message;   
    }
}

checkStorage();


function checkParse() {
    const localStorageUser = localStorage.getItem("feedback-form-state"); 

    try {
        const localStorageUserParse = JSON.parse(localStorageUser);
        return localStorageUserParse;
    } catch {
        return localStorageUser;
    }

}
