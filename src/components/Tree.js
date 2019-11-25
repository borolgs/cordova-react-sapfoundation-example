import React from 'react';
import { TreeView } from 'fundamental-react/TreeView';

const Tree = () => {
  return (
    <TreeView>
      <TreeView.Tree>
        <TreeView.Item>
          <TreeView.Row>
            <TreeView.Col>Row 1</TreeView.Col>
          </TreeView.Row>
        </TreeView.Item>
        <TreeView.Item>
          <TreeView.Row>
            <TreeView.Col>Row 2</TreeView.Col>
          </TreeView.Row>
          <TreeView.Branch>
            <TreeView.Item>
              <TreeView.Row>
                <TreeView.Col>Child 1</TreeView.Col>
              </TreeView.Row>
            </TreeView.Item>
            <TreeView.Item>
              <TreeView.Row>
                <TreeView.Col>Child 2</TreeView.Col>
              </TreeView.Row>
            </TreeView.Item>
          </TreeView.Branch>
        </TreeView.Item>
        <TreeView.Item>
          <TreeView.Row>
            <TreeView.Col>Row 3</TreeView.Col>
          </TreeView.Row>
          <TreeView.Branch>
            <TreeView.Item>
              <TreeView.Row>
                <TreeView.Col>Child 1</TreeView.Col>
              </TreeView.Row>
              <TreeView.Branch>
                <TreeView.Item>
                  <TreeView.Row>
                    <TreeView.Col>Grandchild 1</TreeView.Col>
                  </TreeView.Row>
                </TreeView.Item>
                <TreeView.Item>
                  <TreeView.Row>
                    <TreeView.Col>Grandchild 2</TreeView.Col>
                  </TreeView.Row>
                </TreeView.Item>
              </TreeView.Branch>
            </TreeView.Item>
          </TreeView.Branch>
        </TreeView.Item>
      </TreeView.Tree>
    </TreeView>
  );
};

export default Tree;
