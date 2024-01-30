let watch = 1;
async function counter() {
    await setTimeout(()=>{
        console.log(watch);
        watch++;
        counter();
    }, 1000);
};

counter();