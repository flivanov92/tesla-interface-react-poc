import { useEffect, useState } from 'react';
import { Background, Global, Text, Theme } from '..';

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
  console.log(mylist);
  return (
    <div>
      <Theme>
        <Global />

        {mylist.map((section) => (
          <Background key={section.id} section={section} />
        ))}
      </Theme>
    </div>
  );
};

export default Tesla;
