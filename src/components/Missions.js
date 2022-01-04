import React from 'react';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((mission) => (
          <>
            <p>{mission.name}</p>
            <p>{mission.year}</p>
            <p>{mission.country}</p>
            <p>{mission.destination}</p>
          </>
        ))}
      </div>
    );
  }
}

export default Missions;
