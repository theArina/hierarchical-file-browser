export interface Node {
  name: string;
  type: 'FOLDER' | 'FILE';
  children?: Node[];
  mime?: string;
}

export interface FolderProps {
  name: string;
  children: Node[];
  path: string;
  level: number;
}

export interface FolderState {
  expanded: boolean;
}

export interface FileProps {
  name: string;
  mime: string;
}
