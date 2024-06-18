import React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <Card.Wrap>
      <Card.Section>{children}</Card.Section>
    </Card.Wrap>
  );
}

Card.Wrap = function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        borderRadius: '4px',
        border: '2px solid lightgray',
        boxShadow:
          'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(51, 161, 204) 8px 8px 0px 0px',
        maxWidth: '50ch',
      }}
    >
      {children}
    </div>
  );
};

Card.Section = function Section({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: '1rem',
      }}
    >
      {children}
    </div>
  );
};

Card.Divider = function Divider() {
  return <hr className="h-[2px] w-full bg-gray-300" />;
};
