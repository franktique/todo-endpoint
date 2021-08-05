import TodoItem from '.';
import { render } from '@testing-library/react';

const todo = {
  id: 1,
  description: 'sample todo',
  dueDate: new Date('Tue Aug 3 2021 00:00:00 GMT-0700 (Pacific Daylight Time)'),
  isComplete: false,
  overDue: true,
};

describe('AuthorsReviewers', () => {
  it('renders with author and reviewer name', () => {
    const { getByText } = render(<TodoItem key={todo.id} {...todo} />);
    getByText(todo.description);
  });
});
