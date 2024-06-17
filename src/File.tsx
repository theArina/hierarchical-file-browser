import { Component } from 'react';
import { FileProps } from './interfaces';

class File extends Component<FileProps> {
  render() {
    const { name, mime } = this.props;

    return (
      <div className="file">
        📄 {name} <span className="mime-type">({mime})</span>
      </div>
    );
  }
}

export default File;
