import React from 'react';

import BookResultView from './BookResult.view';

interface BookResultProps {
  route: any;
}

const BookResultContainer: React.FC<BookResultProps> = ({route}) => {
  const {appointment} = route.params;

  return <BookResultView appointment={appointment} />;
};

export default BookResultContainer;
