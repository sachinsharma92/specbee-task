import React, { useEffect } from 'react'

export default function SixMillion() {
  useEffect(() => {
    var MillioncontrollerVideo = new ScrollMagic.Controller();
    var tween = TweenMax.from('#animation', 0.5, {
      fontSize: '40vw'
    });
    var tween = TweenMax.to('#animation', 0.5, {
      fontSize: '10vw'
    });
    new ScrollMagic.Scene({
      triggerElement: '#sixMillion',
      triggerHook: 0.8,
      duration: 500,
    })
      .setTween(tween)
      .addTo(MillioncontrollerVideo)
            // .addIndicators({ name: "1111111" })
  
  }, [])

  return (
    <section className='six-million-section' id="sixMillion">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="title1 title-lg theme-primary" id='animation'>6 million</h2>
            <h2 className="title1 para-style">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
