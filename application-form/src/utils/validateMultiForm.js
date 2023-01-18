import { formatDate } from "@/utils/index.js";

export function validateRequireItem(item) {
    if (item.value === "") {
        item.errorMsg = "this field is required";
        scrollError()
    }
}

export function validateMaxLength(item) {
    if (item.value.length > item.wordLimit) {
        item.errorMsg = "maximum " + item.wordLimit + " characters allowed";
        scrollError()
    }
}

export function validateDoB(item) {
    let today = new Date();
    if (item.value > formatDate(today)) {
        item.errorMsg = "the date should be before today";
        scrollError()
    }
}

export function validateSalary(item) {
    if (isNaN(item.value)) {
        item.errorMsg = "invalid number"
        scrollError()
    } else if (item.value.length > 10) {
        item.errorMsg = "maximum 10 characters are required"
        scrollError()
    }
}

export function validateNextStep(stepData) {
    let isCheck = true
    stepData.data.forEach(item => {
        if (item.requireItem === true) {
            if (item.value === "" || item.value.from === "" || item.value.to === "" || item.errorMsg) {
                isCheck = false
            }
        } else {
            if (item.errorMsg) {
                isCheck = false
            }
        }
    })
    return isCheck
}

export function validateDate(item) {
    let today = new Date();
    let isCheck = true
    if (item.value.from === "" || item.value.to === "") {
        item.errorMsg = "this field is required"
        scrollError()
        isCheck = false;
    } else if (item.value.from > formatDate(today) || item.value.to > formatDate(today)) {
        item.errorMsg = "the date should be before today"
        scrollError()
        isCheck = false;
    } else if (item.value.from > item.value.to && item.value.to !== "") {
        item.errorMsg = "the end date cannot be before the start date"
        scrollError()
        isCheck = false
    } else if (item.value.from === item.value.to) {
        item.errorMsg = "invalid date"
        scrollError()
        isCheck = false
    }
    return isCheck;
}

export function validateDuplicatePassword(stepData, item) {
    let newArr = stepData.data.filter(item => item.isPasswordField === true)
    let set = new Set
    newArr.forEach(item => set.add(item.value))

    if (set.size === newArr.length) {
        item.errorMsg = "passwords do not match"
        scrollError()
    }
}

export function resetError(stepData) {  
    stepData.data.forEach(item => {
        item.errorMsg = ""
    })
}

function scrollError() {
    setTimeout(() => {
        let el = document.getElementsByClassName("msg")[0].offsetTop;
        window.scrollTo({
            top: el - 300,
            behavior: "smooth",
        });
    }, 1);
}






