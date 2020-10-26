//componenet for loading more stuff

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 64em;
`;

const LoadMoreCards = (props) => {
  const [cardToShow, setCardsToShow] = useState([]);
  const cardsPerPage = !props.cardsPerPage ? 8 : props.cardsPerPage;
  const {cards} = props;

  const ref = useRef(cardsPerPage);

  const cardRefList = cards.reduce((acc, card) => {
    acc[card.cardId] = React.createRef();
    return acc;
  }, {});

  const loopThroughCards = (start, end) => {
    const slicedCards = cards.slice(start, end);
    const allCards = cardToShow.concat(slicedCards);
    setCardsToShow(allCards);
  }

  const showMoreCards = () => {

    if(ref.current >= cards.length) {
      return;
    }
        const currentDiv = cardRefList[ref.current].current;
    Promise.resolve()
    .then(function() {
      loopThroughCards(ref.current, ref.current + cardsPerPage);
      ref.current += cardsPerPage;
      currentDiv.scrollIntoView(
        {behavior: "smooth",
        block: "start"}
      );
    });

  }


  useEffect(() => {
    loopThroughCards(0, cardsPerPage)
  }, []);

  return (
    <Container id="card-container" className="container mb-5">
       {cardToShow.map((card) => (
         <div  key={card.cardId} ref={cardRefList[card.cardId]}>
        <div
          {card.info}
        />
        </div>
      ))}
      <div className="justify-content-center d-flex">
        <button className="btn m-auto" onClick={showMoreCards}>
          Load More
        </button>
      </div>
    </Container>
  )

};

export default LoadMoreCards;
