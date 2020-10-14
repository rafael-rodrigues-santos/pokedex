import React from 'react';
import api from '../../services/api';

const Evolution = ({ evolution }) => {
  const [linkEvolution, setLinkEvolution] = React.useState();

  React.useEffect(() => {
    api.get(evolution).then((result) => {
      setLinkEvolution(result.data['evolution-chain']);
    });
  }, []);
  console.log('Olha aqui', linkEvolution);

  return <div>Teste:</div>;
};

export default Evolution;
