export const formFirst = [
    {
        id: 1,
        inputType: "inputText",
        title: "Username",
        key: "username",
        value: "",
        errorMsg: "",
        wordLimit: 100,
        requireItem: true,
        isPasswordField: false,
        showInAdmin: true

    },
    {
        id: 2,
        inputType: "inputText",
        title: "Password",
        key: "password",
        value: "",
        errorMsg: "",
        wordLimit: 100,
        requireItem: true,
        isPasswordField: true,
        showInAdmin: false
    },
    {
        id: 3,
        inputType: "inputText",
        title: "Repeat Password",
        key: "repeat_password",
        value: "",
        errorMsg: "",
        wordLimit: 100,
        requireItem: true,
        isPasswordField: true,
        showInAdmin: false
    },
]

export const formSecond = [
    {
        id: 4,
        inputType: "inputText",
        title: "Fullname",
        key: "fullname",
        value: "",
        errorMsg: "",
        wordLimit: 100,
        requireItem: true,
        isPasswordField: false,
        showInAdmin: true
    },
    {
        id: 5,
        inputType: "inputDob",
        title: "Birthday",
        key: "birthday",
        value: "",
        errorMsg: "",
        requireItem: true,
    },
    {
        id: 6,
        inputType: "inputCity",
        title: "City",
        key: "address",
        value: "",
        errorMsg: "",
        requireItem: false,
    },
    {
        id: 7,
        inputType: "inputJobPosition",
        title: "Position",
        description: "Can select multiple",
        key: "position",
        value: [],
        errorMsg: "",
        requireItem: false,
    },
    {
        id: 8,
        inputType: "inputDescription",
        title: "Describe yourself",
        key: "describe_yourself",
        wordLimit: 1000,
        value: "",
        errorMsg: "",
        requireItem: false,
    },
    {
        id: 9,
        inputType: "inputImage",
        title: "Avatar(only one)",
        key: "avatar",
        placeholder: "Drag & Drop",
        triggerText: "or Click here",
        value: "",
        requireItem: false,
    },
]

export const formThird = [
    {
        id: 10,
        inputType: "inputDescription",
        title: "Reason",
        wordLimit: 1000,
        key: "reason",
        value: "",
        errorMsg: "",
        requireItem: true,
    },
    {
        id: 11,
        inputType: "inputSalary",
        title: "Wish salary",
        key: "salary",
        value: "",
        errorMsg: "",
        requireItem: true,
    }
]

export const formData = [
    {
        id: 99,
        step: 1,
        title: 'Account',
        data: formFirst,
        useAddForm: false,
        labelAddForm: ""
    },
    {
        id: 98,
        step: 2,
        title: "Profile",
        data: formSecond,
        useAddForm: true,
        labelAddForm: "Thêm công ty"
    },
    {
        id: 97,
        step: 3,
        title: "Finished",
        data: formThird,
        useAddForm: false,
        labelAddForm: ""
    },
]



