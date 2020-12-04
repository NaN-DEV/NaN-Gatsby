// IMPORT PLUGIN
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// IMPORT SETTINGS STYLE

import Row from '../../atoms/row/row';
import Icon from '../../atoms/icon/icon';
import List from '../../molecules/list/list';
import Button from '../../atoms/button/button';
import settings from '../../../layouts/settings/settings';

// IMPORT STYLE
import { Modal, Footer, Header, Content, ModalBox, MainManu, Title, GlobalStyle } from './style/style';

// CREATE NEW COMPONENT
const ModalMenuComponent = props => {
  const { closed } = props;

  const { datoCmsSetting, datoCmsSettingsContact } = useStaticQuery(
    graphql`
      query {
        datoCmsSetting {
          mainMenu {
            id
            slug
            title
            icon
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
                <Icon type="logo" colorStyle="secondary" size={4} />
              </Button>

              <Button type="button" content={{ title: 'closed menu' }} parameters={{ newClass: 'closed', onClick: closed }}>
                <Icon type="closed" colorStyle="secondary" />
              </Button>
            </Row>
          </Header>

          <Content theme={settings}>
            <Row newClass="rowContent">
              <MainManu theme={settings}>
                {datoCmsSetting.mainMenu.map(item => {
                  const slug = item.slug.slice(14, item.slug.length);

                  switch (item.slug.search('nan.nz') > 0 ? 1 : 0) {
                    case 1:
                      return (
                        <Button
                          type="linkIn"
                          id={item.id}
                          key={item.id}
                          parameters={{ newClass: 'buttonMenu' }}
                          content={{ title: item.title, to: slug }}
                        >
                          <Icon type={item.icon} colorStyle="primary" size={9} newClass="iconMenu" />
                          <Title theme={settings}>{item.title}</Title>
                        </Button>
                      );
                    default:
                      return (
                        <Button
                          type="linkOut"
                          id={item.id}
                          key={item.id}
                          parameters={{ newClass: 'buttonMenu' }}
                          content={{ title: item.title, to: slug }}
                        >
                          <Icon type={item.icon} colorStyle="primary" size={9} newClass="iconMenu" />
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
                <Button type="linkIn" content={{ title: 'Wyceń Projekt', to: '/sell' }}>
                  Wyceń Projekt
                </Button>
              </List>

              <List type="level" newClass="listLink">
                {datoCmsSettingsContact.socialMedia.map(item => {
                  return (
                    <Button type="linkOut" id={item.id} key={item.id} content={{ title: item.title, to: item.slug }}>
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
