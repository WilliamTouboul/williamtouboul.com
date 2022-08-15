window.onload = function animate_col_on_load() {
    var tl = gsap.timeline({
        repeat: 0,
    });

    tl.from(".big_letters", {
        y: -900,
        duration: 0.5,
        stagger: 0.2,
        ease: Elastic.easeOut.config(1.5, 1),
    });

    tl.from('nav', {
        y: -120,
        duration: 0.5,
        ease: Elastic.easeOut.config(1, 1),
    })

    tl.from('.pres_top_right', {
        y: -300,
        duration: 0.5,
        ease: Elastic.easeOut.config(1, 1),
    })

    tl.from('.pres_top_right_link', {
        y: -300,
        duration: 0.2,
    })


}