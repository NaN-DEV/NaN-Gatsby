// IMPORT PLUGIN
import React from 'react';
// IMPORT GRAPHIV SVG
import Arrow from '../../../assets/icon/arrow-down.svg';
// IMPORT SETTINGS STYLE
import theme from '../../../layouts/theme/settings2';
import Button from '../../atoms/button/button';
import Logo from '../../atoms/logo/logo';
import Mascot from '../../atoms/mascot/mascot';
// IMPORT COMPONENT START
import Row from '../../atoms/row/row';
import Form from '../../molecules/form/form';
import List from '../../molecules/list/list';
// IMPORT STYLES
import {
  Avatar,
  Content,
  ContentAdditional,
  ContentMain,
  ContentWrapper,
  Footer,
  Header,
  Left,
  ListButton,
  Modal,
  Right,
} from './style/style';

// CREATE NEW COMPONENT

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: false,
    };
  }

  render() {
    const { content } = this.state;
    const languageSwitch = [
      {
        id: 'switch-en',
        input: {
          radio: [
            {
              label: 'EN',
              checked: false,
              name: 'laungage',
            },
            {
              label: 'PL',
              checked: true,
              name: 'laungage',
            },
          ],
        },
      },
    ];
    const loginForm = [
      {
        id: 'login-email',
        input: {
          mail: [
            {
              placeholder: 'Email',
            },
          ],
        },
      },
      {
        id: 'login-password',
        input: {
          password: [
            {
              placeholder: 'Password',
            },
          ],
        },
      },
      {
        id: 'login-button',
        button: {
          title: 'ZALOGUJ',
          type: 'outline',
        },
      },
    ];
    const MainManu = [
      { id: 'js-link-main-menu', link: '/service', icon: 'js', title: 'usługi' },
      { id: 'cogs-link-main-menu', link: '/toolds', icon: 'cogs', title: 'narzędzia' },
      { id: 'newspaper-link-main-menu', link: '/', icon: 'newspaper', title: 'blog' },
      { id: 'brand-link-main-menu', link: '/', icon: 'brand', title: 'o nas' },
      { id: 'users-link-main-menu', link: '/', icon: 'users', title: 'praca' },
      { id: 'envelope-link-main-menu', link: '/', icon: 'envelope', title: 'kontakt' },
    ];
    const FooterLeftLink = [{ id: 'link-dodaj-projekt', link: '/', title: 'Dodaj Projekt' }];
    const FooterRightLink = [
      { id: 'link-GitHub', link: '/', title: 'GitHub' },
      { id: 'link-Linkedin', link: '/', title: 'Linkedin' },
      { id: 'link-Facebook', link: '/', title: 'Facebook' },
      { id: 'link-Instagram', link: '/', title: 'Instagram' },
    ];
    const FormRegister = [
      {
        id: 'register-email',
        input: {
          mail: [
            {
              placeholder: 'Email',
            },
          ],
        },
      },
      {
        id: 'register-password',
        input: {
          password: [
            {
              placeholder: 'Hasło',
            },
          ],
        },
      },
      {
        id: 'register-replay-password',
        input: {
          password: [
            {
              placeholder: 'Powtórz hasło',
            },
          ],
        },
      },
      {
        id: 'login-button',
        button: {
          title: 'UTWÓRZ KONTO',
        },
      },
    ];
    const FormLostPassword = [
      {
        id: 'lost-password-email',
        input: {
          mail: [
            {
              placeholder: 'Email',
            },
          ],
        },
      },

      {
        id: 'lost-password-button',
        button: {
          title: 'RESETUJ HASŁO',
        },
      },
    ];
    return (
      <>
        <Modal theme={theme}>
          <Row>
            <Header theme={theme}>
              <Logo secondary />
              <Form
                secondary
                items={languageSwitch}
                className="switch-language"
                classNameRadio="switch-language-radio-box"
              />
              <Button className="button-clouse" hamburger secondary clouse />
            </Header>

            <Content content={content} theme={theme}>
              <ContentWrapper active={content} theme={theme}>
                <ContentMain theme={theme}>
                  <Left theme={theme}>
                    <Avatar theme={theme}>
                      <Mascot key="macot-2" />
                    </Avatar>
                    <Form items={loginForm} secondary />
                    <ListButton theme={theme}>
                      <li>
                        <Button
                          text
                          secondary
                          title="Rejstracja"
                          onClick={() => this.setState({ content: !content })}
                        />
                      </li>
                      <li>
                        <Button
                          text
                          secondary
                          title="Restart hasła"
                          onClick={() => this.setState({ content: !content })}
                        />
                      </li>
                    </ListButton>
                  </Left>
                  <Right theme={theme}>
                    <List menu items={MainManu} />
                  </Right>
                </ContentMain>
                <ContentAdditional theme={theme}>
                  <Left half theme={theme}>
                    <Arrow className="back" onClick={() => this.setState({ content: !content })} />
                    <Form secondary items={FormRegister} title="Utwórz nowe konto" />
                  </Left>
                  <Right line half theme={theme}>
                    <Arrow className="back" onClick={() => this.setState({ content: !content })} />
                    <Mascot className="mascot" key="macot-3" />
                    <Form secondary items={FormLostPassword} title="Przypomnij hasło" />
                  </Right>
                </ContentAdditional>
              </ContentWrapper>
            </Content>
            <Footer theme={theme}>
              <Left theme={theme} start>
                <List level start secondary items={FooterLeftLink} />
              </Left>
              <Right theme={theme} end>
                <List level secondary items={FooterRightLink} />
              </Right>
            </Footer>
          </Row>
        </Modal>
      </>
    );
  }
}

export default ModalComponent;
