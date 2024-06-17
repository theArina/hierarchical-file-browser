import React, { Component } from 'react';
import File from './File';
import { FolderProps, FolderState } from './interfaces';

class Folder extends Component<FolderProps, FolderState> {
  state: Readonly<FolderState> = {
    expanded: false,
  };

  toggleCollapse = () => {
    this.setState((prevState: Readonly<FolderState>) => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const { name, children, path, level } = this.props;
    const { expanded } = this.state;

    return (
      <div style={{ marginLeft: level * 10 }}>
        <div className="folder" onClick={this.toggleCollapse}>
          {expanded ? '▼' : '▶'} {name}
        </div>
        {expanded && (
          <div>
            {children.map((child, index) =>
              child.type === 'FOLDER' ? (
                <Folder
                  key={index}
                  name={child.name}
                  children={child.children || []}
                  path={`${path}/${child.name}`}
                  level={level + 1}
                />
              ) : (
                <File key={index} name={child.name} mime={child.mime || ''}/>
              )
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Folder;
