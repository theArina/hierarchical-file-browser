import { render, fireEvent, screen } from '@testing-library/react';
import Folder from '../src/Folder';
import { Node } from '../src/interfaces';

const mockNode: Node = {
  name: 'Folder1',
  type: 'FOLDER',
  children: [{ name: 'File1', type: 'FILE', mime: 'text/plain' }],
};

test('Folder component, given mock node, expands and collapses folders correctly', () => {
  render(
    <Folder name={mockNode.name} children={mockNode.children} path="/Folder1" level={0}/>
  );

  const folderCollapsed = screen.queryByText('▶ Folder1');
  expect(folderCollapsed).toBeInTheDocument();

  fireEvent.click(folderCollapsed!);

  expect(screen.queryByText(/File1/)).toBeInTheDocument();

  const folderExpanded = screen.queryByText('▼ Folder1');
  expect(folderExpanded).toBeInTheDocument();

  fireEvent.click(folderExpanded!);
  expect(screen.queryByText(/File1/)).not.toBeInTheDocument();
});
