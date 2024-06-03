import { useState } from 'react';
type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  const [first, setfirst] = useState(5);

  return (
    <div>
      <button onClick={() => setfirst(prevVal => prevVal + 1)}>click me</button>
      <h2 className="text-[24px]">
        {title}: {first}
      </h2>
    </div>
  );
};
