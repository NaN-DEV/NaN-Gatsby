// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Section, Left, Right, Category, Title, BoxArticle } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import Row from '../../../atoms/row/row';
import List from '../../../molecules/list/list';
import Sticky from '../../../atoms/sticky/sticky';
import Button from '../../../atoms/button/button';
import Pagination from '../../pagination/pagination';
import Article from '../../../molecules/box/boxArticle/boxArticle';

// Create new component
class sectionCategoryServicesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisIndexCategory: -1,
      allArticleInCategory: [],
    };
  }

  componentDidMount() {
    const allIdCategory = [];
    const { content, id } = this.props;
    const { allArticleInCategory } = this.state;

    content.category.forEach(category => {
      const ItemInCategory = [];
      allIdCategory.push(category.id);

      content.articles.forEach(article => {
        return article.category.filter(post => post.id === category.id).length > 0 && ItemInCategory.push(article);
      });
      allArticleInCategory.push(ItemInCategory);
    });

    this.setState({
      thisIndexCategory: allIdCategory.indexOf(id),
    });
  }

  render() {
    const { allArticleInCategory, thisIndexCategory } = this.state;
    const { id, key, content, parameters, newStyle, newClass } = this.props;

    return (
      <>
        <Section
          theme={settings}
          style={newStyle}
          className={newClass}
          id={`${id}-sectionCategoryServicesComponent`}
          key={`${key}-sectionCategoryServicesComponent`}
        >
          <Row theme={settings} newClass="row">
            <Left theme={settings}>
              <Sticky id={`${id}-sticky`} theme={settings} offsetTop={120}>
                <Category id={`${id}-sticky`} theme={settings}>
                  <Title theme={settings}>Kategorie</Title>
                  <List type="vertical" newClass="listCategory">
                    <Button
                      type="linkIn"
                      content={{ to: '/portfolio/' }}
                      parameters={{ newClass: `linkCategory ${id === 'all-categoryServices-id' && 'bold'}` }}
                    >
                      Wszystko ( {content.articles.length} )
                    </Button>
                    {content.category.map((item, i) => {
                      return item.tag.title === 'ALL' ? null : (
                        <Button
                          type="linkIn"
                          id={`${item.id}-category-id`}
                          key={`${item.id}-category-key`}
                          content={{ to: `/portfolio/${item.slug}` }}
                          parameters={{ newClass: `linkCategory ${id === item.id && 'bold'}` }}
                        >
                          {item.tag.title} ( {allArticleInCategory.length > 0 && allArticleInCategory[i].length} )
                        </Button>
                      );
                    })}
                  </List>
                </Category>
              </Sticky>
            </Left>
            <Right theme={settings}>
              {thisIndexCategory >= 0
                ? allArticleInCategory[thisIndexCategory].map((article, index) => {
                    return (
                      index >= parameters.skip &&
                      index < parameters.skip + parameters.limit && (
                        <BoxArticle theme={settings} id={`${article.id}-BoxArticle-id`} key={`${article.id}-BoxArticle-key`}>
                          <Article
                            type="article"
                            image={article.image}
                            title={article.link}
                            id={`${article.id}-id`}
                            key={`${article.id}-key`}
                            to={`/project/${article.slug}`}
                          />
                        </BoxArticle>
                      )
                    );
                  })
                : content.articles.map((article, index) => {
                    return (
                      index >= parameters.skip &&
                      index < parameters.skip + parameters.limit && (
                        <BoxArticle theme={settings} id={`${article.id}-BoxArticle-id`} key={`${article.id}-BoxArticle-key`}>
                          <Article
                            type="article"
                            image={article.image}
                            title={article.link}
                            id={`${article.id}-id`}
                            key={`${article.id}-key`}
                            to={`/project/${article.slug}`}
                          />
                        </BoxArticle>
                      )
                    );
                  })}
              {thisIndexCategory >= 0
                ? Math.round(allArticleInCategory[thisIndexCategory].length / parameters.limit) > 1 && (
                    <Pagination
                      slug={parameters.slug}
                      page={parameters.page}
                      colorStyle="primary"
                      limit={Math.round(allArticleInCategory[thisIndexCategory].length / parameters.limit)}
                    />
                  )
                : Math.round(content.articles.length / parameters.limit) > 1 && (
                    <Pagination
                      slug={parameters.slug}
                      page={parameters.page}
                      colorStyle="primary"
                      limit={Math.round(content.articles.length / parameters.limit)}
                    />
                  )}
            </Right>
          </Row>
        </Section>
      </>
    );
  }
}

// PropTpyes
sectionCategoryServicesComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  parameters: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};

// PropTypes default
sectionCategoryServicesComponent.defaultProps = {
  id: null,
  key: null,
  content: null,
  newClass: null,
  newStyle: null,
  parameters: null,
};

export default sectionCategoryServicesComponent;
