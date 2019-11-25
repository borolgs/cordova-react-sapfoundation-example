import React from 'react';
import { LayoutGrid } from 'fundamental-react/LayoutGrid';
import { Panel } from 'fundamental-react/Panel';

import Hello from 'components/Hello';
import HelloTable from 'components/HelloTable';
import Tree from 'components/Tree';
import FileUpload from 'components/FileUpload';

const style = { padding: '55px 15px 35px 15px' };

const Main = () => {
  return (
    <article className="fd-page" style={style}>
      <div className="fd-page__content fd-has-background-color-neutral-2">
        <LayoutGrid cols={1}>
          <Panel>
            <Panel.Body>
              <Hello />
            </Panel.Body>
          </Panel>
          <Panel>
            <Panel.Body>
              <HelloTable />
            </Panel.Body>
          </Panel>
          <Panel>
            <Panel.Body>
              <Tree />
            </Panel.Body>
          </Panel>
          <Panel>
            <Panel.Body>
              <FileUpload />
            </Panel.Body>
          </Panel>
        </LayoutGrid>
      </div>
    </article>
  );
};

export default Main;
