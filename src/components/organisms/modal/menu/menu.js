// Import plugin
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import style
import { Modal, Footer, Header, Content, ModalBox, MainManu, Title, GlobalStyle } from './style/style';

// Import component
import Row from '../../../atoms/row/row';
import Icon from '../../../atoms/icon/icon';
import List from '../../../molecules/list/list';
import Button from '../../../atoms/button/button';

// Create new component
const ModalMenuComponent = props => {
  const { parameters } = props;

  const { datoCmsContact } = useStaticQuery(
    graphql`
      query {
        datoCmsContact {
          id
          social {
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
        <Modal theme={{ settings }}>
          <Header theme={{ settings }}>
            <Row parameters={{}}>
              <Button type="linkIn" content={{ to: '/', title: 'nan' }} parameters={{ className: 'logo' }}>
                <Icon type="logo" parameters={{ color: 'secondary', size: 4 }} />
              </Button>

              <Button type="button" content={{ title: 'closed menu' }} parameters={{ className: 'closed', onClick: parameters.switchPower }}>
                <Icon type="closed" parameters={{ color: 'secondary' }} />
              </Button>
            </Row>
          </Header>

          <Content theme={{ settings }}>
            <Row parameters={{ className: 'row' }}>
              <MainManu theme={{ settings }}>
                <Button type="linkIn" parameters={{ className: 'buttonMenu' }} content={{ title: 'portfolio', to: '/p/' }}>
                  <Icon type="folder" parameters={{ size: 9 }} />
                  <Title theme={{ settings }}>portfolio</Title>
                </Button>

                <Button type="linkOut" parameters={{ className: 'buttonMenu' }} content={{ title: 'blog', to: 'https://www.uxu.pl' }}>
                  <Icon type="coffe" parameters={{ size: 9 }} />
                  <Title theme={{ settings }}>blog</Title>
                </Button>

                <Button type="linkIn" parameters={{ className: 'buttonMenu' }} content={{ title: 'o mnie', to: '/about/' }}>
                  <Icon type="cv" parameters={{ size: 9 }} />
                  <Title theme={{ settings }}>o mnie</Title>
                </Button>

                <Button type="linkIn" parameters={{ className: 'buttonMenu' }} content={{ title: 'usługi', to: '/s/' }}>
                  <Icon type="settings" parameters={{ size: 9 }} />
                  <Title theme={{ settings }}>uslugi</Title>
                </Button>

                <Button type="linkIn" parameters={{ className: 'buttonMenu' }} content={{ title: 'kontakt', to: '/contact/' }}>
                  <Icon type="mail" parameters={{ size: 9 }} />
                  <Title theme={{ settings }}>kontakt</Title>
                </Button>
              </MainManu>
            </Row>
          </Content>

          <Footer theme={{ settings }}>
            <Row parameters={{ className: 'row' }}>
              <List type="level" parameters={{ className: 'listLink' }}>
                <Button type="linkIn" parameters={{}} content={{ title: 'Wyceń Projekt', to: '/sell' }}>
                  Wyceń Projekt
                </Button>
              </List>

              <List type="level" parameters={{ className: 'listLink' }}>
                {datoCmsContact.social.map(item => {
                  return (
                    <Button type="linkOut" key={item.id} parameters={{}} content={{ title: item.title, to: item.slug }}>
                      {item.title}
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
