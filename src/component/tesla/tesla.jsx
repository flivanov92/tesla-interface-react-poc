import { useEffect, useState } from 'react';
import { Background, Global, Theme } from '..';

const Tesla = () => {
  const [mylist, update] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { section } = await (
          await fetch(
            'https://raw.githubusercontent.com/flivanov92/tesla-interface-react-poc/dev/src/data/site.json'
          )
        ).json();

        update(section);
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
