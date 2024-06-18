import { Component } from 'react';
import Folder from './Folder';
import data from '../Data.json';
import { Node } from './interfaces';

const typedData: Node[] = data as Node[];

class App extends Component {
  render() {
    return (
      <>
        <header className="app-header">
          <h1>File Browser</h1>
        </header>
        <div className="browser">
          {typedData.map((node: Node, index: number) => (
            <Folder
              key={index}
              name={node.name}
              children={node.children!}
              path={`/${node.name}`}
              level={0}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
