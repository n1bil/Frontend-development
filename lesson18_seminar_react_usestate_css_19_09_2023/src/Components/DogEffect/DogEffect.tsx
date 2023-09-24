import React, { useEffect, useState } from 'react';

export default function DogEffect():JSX.Element {

    // Mount, update, unmount
    const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
    const [numberOfCats, setNumberOfCats] = useState<number>(0);
    useEffect(() => {
        // с пустым массивом зависимостей
        console.log('UseEffect 1 - только при первой отрисовке');
    }, []);

    useEffect(() => {
        // without dependencies
        console.log('UseEffect 2 - при первой отрисовки и при любом изменений');
    });

    useEffect(() => {
        // с массивом зависимостей
        console.log('UseEffect 3 - только при первой отрисовке и изменений указанной зависимостей');
    }, [numberOfCats]);

    function handleInviteCat():void {
        setNumberOfCats(numberOfCats + 1);
    }

  return (
    <div>
        <h1>DogEffect</h1>
        Number of dogs: {numberOfDogs}
        Number of dogs: {numberOfCats}
        <button type="button" onClick={():void => setNumberOfDogs(numberOfDogs + 1)}>Invite dog</button>
        <button type="button" onClick={handleInviteCat}>Invite dog</button>
    </div>
  );
}