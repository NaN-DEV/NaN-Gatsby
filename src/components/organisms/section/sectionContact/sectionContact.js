/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, FormBox, DataBox, LisData, ListBox, Point, Important, Tel, Mail, MascotBox, Title, Form } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Input from '../../../atoms/input/input';
import Button from '../../../atoms/button/button';
import Mascot from '../../../atoms/mascot/mascot';
import TextArea from '../../../atoms/textarea/textarea';
import CheckBox from '../../../atoms/checkbox/checkbox';

// CREATE NEW COMPONENT
class sectionContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.encode = this.encode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.querySelector('form').addEventListener('submit', this.handleSubmit);
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': event.target.getAttribute('name'),
        ...name,
      }),
    })
      .then(value => console.log(value))
      .catch(error => console.log(error));
  };

  render() {
    const { id, newStyle, newClass, content } = this.props;
    return (
      <>
        <Section
          theme={settings}
          newStyle={newStyle}
          className={newClass}
          id={`${id}-sectionContactComponent-section-id`}
          key={`${id}-sectionContactComponent-section-key`}
        >
          <Row newClass="row">
            <FormBox theme={settings}>
              <Title>FORMULARZ</Title>
              <form data-netlify="true" name="pizzaOrder" method="post" onSubmit={this.handleSubmit}>
                <input type="hidden" name="form-name" value="pizzaOrder" />
                <label>
                  What order did the pizza give to the pineapple?
                  <input name="order" type="text" />
                </label>
                <input type="submit" />
              </form>
              <Form name="contact" method="POST" data-netlify="true">
                <Input type="hidden" name="form-name" value="contact" />
                <Input
                  required
                  id="email"
                  name="email"
                  type="email"
                  title="Email"
                  newClass="error"
                  color="secondary"
                  placeholder="email@domian.com"
                />
                <Input required id="name" name="name" type="text" title="Name" newClass="error" color="secondary" placeholder="name" />
                <Input required id="tel" name="tel" type="tel" title="Phone" color="secondary" placeholder="Number" />
                <TextArea
                  required
                  id="message"
                  name="message"
                  title="Najpierw potrzebujesz NDA? Wyślij nam e-mail na adres : <a href='mailto:hello@na3.eu'>hello@na3.eu</a>"
                  newClass="error"
                  color="secondary"
                  placeholder="A brief description of your idea"
                />
                <CheckBox
                  id="politycy"
                  type="classic"
                  name="checkbox"
                  color="secondary"
                  newClass="error"
                  content="NaN LLC potrzebuje twoich danych na czas odpowiedzi na twoje pytanie.  Masz prawo zrezygnować z przetwarzania twoich danych w dowolnym momencie, więcej informacji w <a href='#'>polityce prywatności</a> "
                />
                <Button type="sumbit" content={{ title: 'Wyślij' }} parameters={{ color: 'secondary' }}>
                  Wyślij
                </Button>
              </Form>
            </FormBox>
            <DataBox theme={settings}>
              <MascotBox theme={settings}>
                <Mascot newClass="mascot" />
              </MascotBox>
              <ListBox>
                <LisData theme={settings}>
                  <Point theme={settings}>
                    <Important theme={settings}>{content.nameCompany}</Important>
                  </Point>
                  <Point theme={settings}>
                    ul. {content.street} {content.streetNumber}
                  </Point>
                  <Point theme={settings}>
                    {content.postCode} {content.city}
                  </Point>
                  <Point theme={settings}>{content.country}</Point>
                </LisData>
                <LisData theme={settings}>
                  <Point theme={settings}>
                    <Important theme={settings}>VAT-ID :</Important> {content.vat}
                  </Point>
                  <Point theme={settings}>
                    <Important theme={settings}>REGON :</Important> {content.regon}
                  </Point>
                  <Point theme={settings}>
                    <Important theme={settings}>KRS :</Important> {content.krs}
                  </Point>
                </LisData>
                <LisData theme={settings}>
                  <Point theme={settings}>
                    <Important theme={settings}>KAPITAŁ :</Important> {`${content.capital}`} PLN
                  </Point>
                  <Point theme={settings}>
                    <Important theme={settings}>CEO :</Important> {content.ceo.name}
                  </Point>
                </LisData>

                <LisData theme={settings}>
                  <Point theme={settings}>
                    <Important theme={settings}>TEL :</Important>
                    <Tel theme={settings} to={`+48 ${content.telephoneNumber}`}>
                      {`+48 ${content.telephoneNumber}`}
                    </Tel>
                  </Point>
                  <Point theme={settings}>
                    <Important theme={settings}>MAIL :</Important>
                    <Mail theme={settings} to={`mailo:${content.mail}`}>
                      {`${content.mail}`}
                    </Mail>
                  </Point>
                </LisData>
              </ListBox>
            </DataBox>
          </Row>
        </Section>
      </>
    );
  }
}

// PropTpyes
sectionContactComponent.propTypes = {
  id: PropTypes.string,
  newClass: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

sectionContactComponent.defaultProps = {
  id: null,
  content: null,
  newClass: null,
  newStyle: null,
};

export default sectionContactComponent;
