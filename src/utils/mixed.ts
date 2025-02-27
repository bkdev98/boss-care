import {useRef, useEffect} from 'react';

export function getImageUri({
  path,
  size = 'medium',
}: {
  path: string | null | undefined;
  size?: 'medium' | 'original';
}): string {
  if (!path) {
    return '';
  }
  if (size === 'original') {
    return `https://image.tmdb.org/t/p/original/${path}`;
  }
  return `https://image.tmdb.org/t/p/w500/${path}`;
}

export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
