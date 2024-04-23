console.log("Hello Sonu Start now .")

const mail = ["sksonu8544@gmail.com", "satyam@gmail.com", "sohil@gmail.com"];

function waitForSendMail(i) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(i);
            console.log("resolve here")
        }, 2000)
    })
}


async function mailSendLogin() {
    console.log("Start to send main Here")
    for (const user of mail) {
        const result = await waitForSendMail(user)
        console.log(result);
    }
    console.log("Dome...");
}

mailSendLogin();