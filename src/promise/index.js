const somethingWillHappem = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('hey!')
        } else{
            reject('whooops!')
        }

    });
};

somethingWillHappem()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappem2 = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            setTimeout(() => {
                resolve('true')
            }, 2000);
        } else{
            const error = new Error('whoooopsi!');
            reject(error);
        }
    })
}


somethingWillHappem2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([somethingWillHappem(),somethingWillHappem2()])
    .then(response => {
        console.log('Array of resulst ', response);
    })
    .catch(err => {
        console.log(err);
    })


