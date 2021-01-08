let toggle = document.querySelector('.nav_toggle');
let bool = false;
let tl = gsap.time();

toggle.addEventListener('click', function(){

    if (bool === false){
        gsap.to('.bar1', {
            duration:.2,
            width:'45px',
        height:'6px',
        top:'45%',
        left:'15%',
        rotate:'45deg'
    });

    gsap.to('.bar2', {
        duration:.2,
        opacity:0
}) 
gsap.to('.bar3', {
    duration:.2,
    width:'45px',
height:'6px',
top:'45%',
left:'15%',
rotate:'-45deg'
});
tl.to('.nav_back', {
    duration: .5,
    width:'100%',
    ease: 'power2.in'

});
    tl.to('li', {
        duration: .5,
        opacity: 1,
        ease: 'power3.in',
        stagger: .15

    })
        bool = true
} else {
    gsap.to('.bar1', {
        duration: .2,
        width: '37px',
        height: '4px',
        top: '25%',
        left:  '22%',
        rotate: '0deg'
            });
            gsap.to('.bar2', {
                duration: .2,
                width: '37px',
                height: '4px',
                top: '45%',
                left: '22%',
                opacity: 1
                
                    });
                    gsap.to('.bar3', {
                        duration: .2,
                        width:'37px',
                        height: '4px',
                        top: '65%',
                        left: '22%',
                        rotate: '0deg'
                        
                            });
        tl.to('li', {
            duration: .7,
            opacity: 0,
            ease: 'power3.out',
            stagger: .1

        })
        tl.to('.nav_back', {
            duration: .5,
            delay: .2,
            width: 0,
            ease: 'power2.out'
        })
        bool = false
    }
})