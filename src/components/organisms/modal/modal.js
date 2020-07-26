// IMPORT PLUGIN
import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

// IMPORT SETTINGS STYLE

import Row from '../../atoms/row/row';
import Icon from '../../atoms/icon/icon';
import List from '../../molecules/list/list';
import settings from '../../../layouts/settings/settings';

// IMPORT STYLE
import {
  Url,
  Modal,
  Footer,
  Header,
  BoxMenu,
  Content,
  ModalBox,
  MainManu,
  MenuTitle,
  GlobalStyle,
} from './style/style';

// CREATE NEW COMPONENT
class ModalMenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query ModalMainMenu {
            allDatoCmsSetting {
              nodes {
                mainMenu {
                  id
                  name
                  slug
                  size
                  icon
                }
              }
            }
            allDatoCmsSettingsContact {
              nodes {
                socialMedia {
                  id
                  name
                  url
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <GlobalStyle />
            <ModalBox>
              <Modal theme={settings}>
                <Header>
                  <Row newClass="row">
                    <Icon
                      link="/"
                      secondary
                      type="link"
                      icon="logo"
                      height={4}
                      title="NaN software house"
                    />
                    <Icon
                      secondary
                      type="button"
                      icon="closed"
                      title="closed menu"
                      newClass="closed"
                    />
                  </Row>
                </Header>
                <Content>
                  <Row newClass="row">
                    <MainManu>
                      {data.allDatoCmsSetting.nodes[0].mainMenu.map(item => {
                        return (
                          <BoxMenu theme={settings} size={item.size} key={item.id}>
                            <Link to="/" title="usługi">
                              <Icon
                                secondary
                                height={9}
                                icon={item.icon}
                                title={item.name}
                                newClass="icon-menu"
                              />
                              <MenuTitle theme={settings}>{item.name}</MenuTitle>
                            </Link>
                          </BoxMenu>
                        );
                      })}
                    </MainManu>
                  </Row>
                </Content>
                <Footer theme={settings}>
                  <Row newClass="row">
                    <List type="level" breakpoint="tablet" newClass="link left">
                      <Link to="/" title="home">
                        Wyceń Projekt
                      </Link>
                    </List>

                    <List type="level" breakpoint="tablet" newClass="link right">
                      {data.allDatoCmsSettingsContact.nodes[0].socialMedia.map(item => {
                        return (
                          <Url
                            key={item.id}
                            target="_blank"
                            href={item.url}
                            title={item.name}
                            rel="noopener noreferrer"
                          >
                            #{item.name}
                          </Url>
                        );
                      })}
                    </List>
                  </Row>
                </Footer>
              </Modal>
            </ModalBox>
          </>
        )}
      />
    );
  }
}

// EXPORT NEW COMPONENT
export default ModalMenuComponent;
