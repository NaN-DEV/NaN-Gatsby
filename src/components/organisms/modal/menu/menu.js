// IMPORT PLUGIN
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// IMPORT SETTINGS STYLE

import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import List from '../../../molecules/list/list';
import Button from '../../../atoms/button/button';
import settings from '../../../../layouts/settings/settings';

// IMPORT STYLE
import { Modal, Footer, Header, Content, ModalBox, MainManu, Title, GlobalStyle } from './style/style';

// CREATE NEW COMPONENT
const ModalMenuComponent = props => {
  const { parameters } = props;

  const { datoCmsSetting, datoCmsSettingsContact } = useStaticQuery(
    graphql`
      query {
        datoCmsSetting {
          mainMenu {
            id
            url
            slug
            icon
            title
          }
        }
        datoCmsSettingsContact {
          socialMedia {
            id
            slug
            title
          }
        }
      }
    `,
  );

  return (
    <>
      <GlobalStyle />
      <ModalBox>
        <Modal theme={settings}>
          <Header>
            <Row newClass="rowHeader">
              <Button type="linkIn" content={{ to: '/', title: 'nan' }} parameters={{ newClass: 'logo' }}>
                <Icon type="logo" parameters={{ color: 'secondary', size: 4 }} />
              </Button>

              <Button type="button" content={{ title: 'closed menu' }} parameters={{ newClass: 'closed', onClick: parameters.switchPower }}>
                <Icon type="closed" parameters={{ color: 'secondary' }} />
              </Button>
            </Row>
          </Header>

          <Content theme={settings}>
            <Row newClass="rowContent">
              <MainManu theme={settings}>
                {datoCmsSetting.mainMenu.map(item => {
                  switch (item.url) {
                    case false:
                      return (
                        <Button
                          type="linkIn"
                          id={item.id}
                          key={item.id}
                          parameters={{ newClass: 'buttonMenu', color: null }}
                          content={{ title: item.title, to: item.slug }}
                        >
                          <Icon type={item.icon} parameters={{ color: 'primary', size: 9, newClass: 'iconMenu' }} />
                          <Title theme={settings}>{item.title}</Title>
                        </Button>
                      );
                    default:
                      return (
                        <Button
                          type="linkOut"
                          id={item.id}
                          key={item.id}
                          parameters={{ newClass: 'buttonMenu', color: null }}
                          content={{ title: item.title, to: item.slug }}
                        >
                          <Icon type={item.icon} parameters={{ color: 'primary', size: 9, newClass: 'iconMenu' }} />
                          <Title theme={settings}>{item.title}</Title>
                        </Button>
                      );
                  }
                })}
              </MainManu>
            </Row>
          </Content>

          <Footer theme={settings}>
            <Row newClass="rowFooter">
              <List type="level" newClass="listLink">
                <Button type="linkIn" parameters={{ color: null }} content={{ title: 'Wyceń Projekt', to: '/sell' }}>
                  Wyceń Projekt
                </Button>
              </List>

              <List type="level" newClass="listLink">
                {datoCmsSettingsContact.socialMedia.map(item => {
                  return (
                    <Button type="linkOut" id={item.id} key={item.id} parameters={{ color: null }} content={{ title: item.title, to: item.slug }}>
                      #{item.title}
                    </Button>
                  );
                })}
              </List>
            </Row>
          </Footer>
        </Modal>
      </ModalBox>
    </>
  );
};

// EXPORT NEW COMPONENT
export default ModalMenuComponent;
