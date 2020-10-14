import React from 'react';
import Button from '../Button/Button';

const Pagination = ({ goNextPage, goPrevPage }) => {
  return (
    <div>
      {goPrevPage && <Button text="< Anterior" onClick={goPrevPage} />}
      {goNextPage && <Button text="Próximo >" onClick={goNextPage} />}
    </div>
  );
};

export default Pagination;
