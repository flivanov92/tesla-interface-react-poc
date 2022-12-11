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

  return (
    <div>
      <Theme>
        <Global />

        <h1>Hi there</h1>
        <br></br>
        <br></br>
        <p>Yeeeyas </p>
        <div>
          <Text myTitle>title</Text>
          <Text myLink myTitle>
            link
          </Text>
          <Text>default</Text>
          <Text>default</Text>
        </div>
        {mylist.map((section) => (
          <Background key={section.id} section={section} />
        ))}
      </Theme>
    </div>
  );
};

export default Tesla;
