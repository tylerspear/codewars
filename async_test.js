async function getActivity() {
    let response = await fetch('https://www.boredapi.com/api/activity')
    const data = await response.json()
    console.log(data)
}
console.log('before async function')
getActivity()
console.log('outside of async function')