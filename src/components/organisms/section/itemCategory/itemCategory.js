/* eslint-disable no-shadow */
// IMPORT PLUGIN
import React from 'react';

// IMPORT STYLE
import { Section, Left, Right, BoxCategory, Title, ListCategory, Item, GoToLink, GoToLinkOff, BoxArticle } from './style/style';

// IMPORT SETTINGS STYLE
import settings from '../../../../layouts/settings/settings';

// IMPORT COMPONENT
import Row from '../../../atoms/row/row';
import Sticky from '../../../atoms/sticky/sticky';
import Article from '../../../molecules/boxArticle/boxArticle';

// CREATE NEW COMPONENT

// CREATE NEW COMPONENT

const itemCategoryComponent = props => {
  const { id, items, category } = props;

  const numberOfArticles = categoryId => {
    const allArticleID = [];
    items.forEach(item => {
      const arrayFilter = item.category.filter(category => category.id === categoryId);
      if (arrayFilter.length > 0) {
        allArticleID.push(arrayFilter[0]);
      }
    });
    return `${allArticleID.length}`;
  };

  const selectArticle = categoryId => {
    const allArticle = [];
    items.forEach(item => {
      const arrayFilter = item.category.filter(category => category.id === categoryId);
      if (arrayFilter.length > 0) {
        allArticle.push(item);
      }
    });
    return allArticle;
  };

  return (
    <>
      <Section theme={settings}>
        <Row theme={settings} newClass="row">
          <Left theme={settings}>
            <Sticky id={`${id}-sticky`} theme={settings} offsetTop={60}>
              <BoxCategory id={`${id}-sticky`} theme={settings}>
                <Title theme={settings}>Kategorie</Title>
                <ListCategory theme={settings}>
                  <Item theme={settings}>
                    <GoToLink to="/" theme={settings}>
                      Wszystko ({`${items.length}`})
                    </GoToLink>
                  </Item>
                  {category.map(item => {
                    return (
                      <Item theme={settings}>
                        {item.id === id ? (
                          <GoToLinkOff title={item.name} to={`/portfolio/${item.slug}`} theme={settings}>
                            {item.name} ({numberOfArticles(item.id)})
                          </GoToLinkOff>
                        ) : (
                          <GoToLink title={item.name} to={`/portfolio/${item.slug}`} theme={settings}>
                            {item.name} ({numberOfArticles(item.id)})
                          </GoToLink>
                        )}
                      </Item>
                    );
                  })}
                </ListCategory>
              </BoxCategory>
            </Sticky>
          </Left>
          <Right theme={settings}>
            {selectArticle(id).map(item => {
              return (
                <BoxArticle theme={settings}>
                  <Article id={item.title} theme={settings} title={item.title} slug={`/portfolio/project/${item.slug}`} image={item.image} />
                </BoxArticle>
              );
            })}
          </Right>
        </Row>
      </Section>
    </>
  );
};

// PropTpyes
itemCategoryComponent.propTypes = {};

itemCategoryComponent.defaultProps = {};

export default itemCategoryComponent;
