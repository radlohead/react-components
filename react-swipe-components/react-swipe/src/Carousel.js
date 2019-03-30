import React from 'react';
import ReactSwipe from 'react-swipe';
import querystring from 'querystring';

const query = querystring.parse(window.location.search.slice(1));
const numberOfSlides = parseInt(query.slidesNum, 3) || 3;
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
    return (
      <div key={i}>
        <div className="item">{i}</div>
      </div>
    );
});

let reactSwipeEl;

class Carousel extends React.Component {
    render() {
        return (
            <div>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: true }}
                    ref={el => (reactSwipeEl = el)}
                >
                    {paneNodes}
                </ReactSwipe>
                <button onClick={() => reactSwipeEl.prev()}>Previous</button>
                <button onClick={() => reactSwipeEl.next()}>Next</button>
            </div>
        )
    }
};

export default Carousel;