const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    console.log ("hai cliccato");
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
        console.log ("Mostro toast");
    })
}