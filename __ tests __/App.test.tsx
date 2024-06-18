import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import { Node } from '../src/interfaces';

jest.mock('../Data.json', () => {
  const mockData: Node[] = [
    {
      name: 'Root',
      type: 'FOLDER',
      children: [
        {
          name: 'Folder1',
          type: 'FOLDER',
          children: [{ name: 'File1', type: 'FILE', mime: 'text/plain' }],
        },
      ],
    },
  ];
  return { default: mockData };
});

test('App component, given mock data, expands folders and renders correctly', () => {
  render(<App/>);
  const rootElement = screen.queryByText('▶ Root');

  expect(rootElement).toBeInTheDocument();

  fireEvent.click(rootElement!);
  const folderElement = screen.queryByText('▶ Folder1');

  expect(folderElement).toBeInTheDocument();

  fireEvent.click(folderElement!);
  const fileElement = screen.queryByText(/File1/);

  expect(fileElement).toBeInTheDocument();
});
