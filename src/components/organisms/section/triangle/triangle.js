// IMPORT PLUGIN
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// IMPORT STYLE
import { Section, Article, Category, Title, BoxTop, BoxDown } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Button from '../../../atoms/button/button';

// CREATE NEW COMPONENT

class SectionTriangleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content, newClass, newStyle, color } = this.props;

    return (
      <>
        <Section color={color} theme={settings} newStyle={newStyle} className={newClass}>
          {content.map((item, index) => {
            if (index % 3 === 0 || index === 0) {
              return (
                <>
                  <Article full secondary key={item.id} theme={settings}>
                    <Row>
                      <BoxTop>
                        <Category>
                          {item.category.map((category, i) => {
                            if (item.category.length === i + 1) {
                              return (
                                <>
                                  <Link to={category.slug} key={category.id}>
                                    {category.name}
                                  </Link>
                                </>
                              );
                            }

                            return (
                              <>
                                <Link to={category.slug} key={category.id}>
                                  {category.name} /
                                </Link>
                              </>
                            );
                          })}
                        </Category>
                        <Link to={item.slug} key={item.id}>
                          <Title theme={settings}>{item.title}</Title>
                        </Link>
                      </BoxTop>
                      <BoxDown>
                        <Button
                          type="link"
                          title="Więcej"
                          color="primary"
                          link={item.slug}
                          newClass="button"
                        />
                      </BoxDown>
                    </Row>
                  </Article>
                </>
              );
            }

            if (index % 2 === 0) {
              if ((index + 1) % 3 === 0) {
                return (
                  <>
                    <Article half right primary key={item.id} theme={settings}>
                      <Row half left desctop>
                        <BoxTop>
                          <Category>
                            {item.category.map((category, i) => {
                              if (item.category.length === i + 1) {
                                return (
                                  <>
                                    <Link to={category.slug} key={category.id}>
                                      {category.name}
                                    </Link>
                                  </>
                                );
                              }

                              return (
                                <>
                                  <Link to={category.slug} key={category.id}>
                                    {category.name} /
                                  </Link>
                                </>
                              );
                            })}
                          </Category>
                          <Link to={item.slug} key={item.id}>
                            <Title theme={settings}>{item.title}</Title>
                          </Link>
                        </BoxTop>
                        <BoxDown>
                          <Button
                            type="link"
                            title="Więcej"
                            color="secondary"
                            link={item.slug}
                            newClass="button"
                          />
                        </BoxDown>
                      </Row>
                    </Article>
                  </>
                );
              }
              return (
                <>
                  <Article half left primary key={item.id} theme={settings}>
                    <Row half right desctop>
                      <BoxTop>
                        <Category>
                          {item.category.map((category, i) => {
                            if (item.category.length === i + 1) {
                              return (
                                <>
                                  <Link to={category.slug} key={category.id}>
                                    {category.name}
                                  </Link>
                                </>
                              );
                            }

                            return (
                              <>
                                <Link to={category.slug} key={category.id}>
                                  {category.name} /
                                </Link>
                              </>
                            );
                          })}
                        </Category>
                        <Link to={item.slug} key={item.id}>
                          <Title theme={settings}>{item.title}</Title>
                        </Link>
                      </BoxTop>
                      <BoxDown>
                        <Button
                          type="link"
                          title="Więcej"
                          color="secondary"
                          link={item.slug}
                          newClass="button"
                        />
                      </BoxDown>
                    </Row>
                  </Article>
                </>
              );
            }

            if ((index - 1) % 3 === 0) {
              return (
                <>
                  <Article half left tertiary key={item.id} theme={settings}>
                    <Row half right desctop>
                      <BoxTop>
                        <Category>
                          {item.category.map((category, i) => {
                            if (item.category.length === i + 1) {
                              return (
                                <>
                                  <Link to={category.slug} key={category.id}>
                                    {category.name}
                                  </Link>
                                </>
                              );
                            }

                            return (
                              <>
                                <Link to={category.slug} key={category.id}>
                                  {category.name} /
                                </Link>
                              </>
                            );
                          })}
                        </Category>
                        <Link to={item.slug} key={item.id}>
                          <Title theme={settings}>{item.title}</Title>
                        </Link>
                      </BoxTop>
                      <BoxDown>
                        <Button
                          type="link"
                          title="Więcej"
                          color="primary"
                          link={item.slug}
                          newClass="button"
                        />
                      </BoxDown>
                    </Row>
                  </Article>
                </>
              );
            }
            return (
              <>
                <Article half right tertiary key={item.id} theme={settings}>
                  <Row half left desctop>
                    <BoxTop>
                      <Category>
                        {item.category.map((category, i) => {
                          if (item.category.length === i + 1) {
                            return (
                              <>
                                <Link to={category.slug} key={category.id}>
                                  {category.name}
                                </Link>
                              </>
                            );
                          }

                          return (
                            <>
                              <Link to={category.slug} key={category.id}>
                                {category.name} /
                              </Link>
                            </>
                          );
                        })}
                      </Category>
                      <Link to={item.slug} key={item.id}>
                        <Title theme={settings}>{item.title}</Title>
                      </Link>
                    </BoxTop>
                    <BoxDown />
                  </Row>
                </Article>
              </>
            );
          })}
        </Section>
      </>
    );
  }
}

// PropTpyes
SectionTriangleComponent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionTriangleComponent.defaultProps = {
  content: null,
  newClass: null,
  newStyle: null,
  color: 'primary',
};

export default SectionTriangleComponent;
