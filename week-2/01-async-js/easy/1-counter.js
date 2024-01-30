function counter() {
    let watch = 1;
    setInterval(()=>{
        console.log(watch);
        watch += 1;
    }, 1000)
}

counter();