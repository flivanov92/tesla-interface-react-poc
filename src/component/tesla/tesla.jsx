import { useEffect, useState } from 'react';
import { Background, Global, Theme } from '..';

const Tesla = () => {
  const [mylist, update] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await (
          await fetch('http://localhost:3001/section')
        ).json();

        update(result);
      } catch (error) {
        console.error(
          `Error with message: ${error.message} and code: ${error.code}`
        );
      }
    })();
  }, []);
  return (
    <div>
      <Theme>
        <Global />

        {mylist.map((section, key) => (
          <Background
            key={section.id}
            section={section}
            goTo={key < mylist.length - 1 ? mylist[key + 1].id : mylist[0].id}
          />
        ))}
      </Theme>
    </div>
  );
};

export default Tesla;
