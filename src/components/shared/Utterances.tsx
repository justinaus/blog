import React, { useEffect, useRef } from 'react';

export interface IUtterancesProps {
  issueTerm?: string;
  label?: string;
  theme?: string;
}

const Utterances: React.FC<IUtterancesProps> = ({
  issueTerm = 'pathname',
  label = '💬',
  theme = 'github-light',
}) => {
  const utterancesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const utterancesElement = utterancesRef.current;
    if (!utterancesElement) return;

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://utteranc.es/client.js';
    scriptElement.async = true;
    scriptElement.crossOrigin = 'anonymous';
    scriptElement.setAttribute('repo', 'justinaus/blog');
    scriptElement.setAttribute('issue-term', issueTerm);
    if (label) scriptElement.setAttribute('label', label);
    scriptElement.setAttribute('theme', theme);

    utterancesElement.appendChild(scriptElement);

    return () => {
      if (!utterancesElement) return;

      utterancesElement.innerHTML = '';
    };
  }, [issueTerm, label, theme]);

  return <div ref={utterancesRef} />;
};

export default Utterances;
