importScripts('https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.js');
importScripts('./sample.js');

self.addEventListener(
    'message', event => {
        console.log('Message Received in worker::::', event.data);

        //processing sample
        console.log(samplepAdd(2,3))
        
        //send request
        axios.get('https://reqres.in/api/users?page=2').then(
            res => {
                console.log('res in worker:::', res);
                postMessage(`Response from API call in worker:  ${JSON.stringify(res)}`)
            }
        ).catch(
            err => console.log('err:::',err)
        )
    }
)