// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import style
import { Section, Left, Right, Category, BoxArticle } from './style/style';

// Import settings style
import settings from '../../../../layouts/settings/settings';

// Import component
import List from '../../../molecules/list/list';
import Sticky from '../../../atoms/sticky/sticky';
import Button from '../../../atoms/button/button';
import Pagination from '../../pagination/pagination';
import Article from '../../../molecules/article/article';

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
    const { content, parameters } = this.props;
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
      thisIndexCategory: allIdCategory.indexOf(parameters.id),
    });
  }

  render() {
    const { content, parameters } = this.props;
    const { allArticleInCategory, thisIndexCategory } = this.state;

    return (
      <>
        <Section theme={{ settings }}>
          <Left theme={{ settings }}>
            <Sticky id={`${parameters.id}-sticky`} offsetTop={120}>
              <Category id={`${parameters.id}-sticky`} theme={{ settings }}>
                <List type="vertical" parameters={{}}>
                  <Button type="linkIn" content={{ to: '/s/' }} parameters={{ className: parameters.id === 'all' && 'desactive' }}>
                    wszystko ( {content.articles.length} )
                  </Button>
                  {content.category.map((item, i) => {
                    return item.tag.title === 'ALL' ? null : (
                      <Button type="linkIn" content={{ to: `/s/${item.slug}` }} parameters={{ className: parameters.id === item.id && 'desactive' }}>
                        {item.tag.title} ( {allArticleInCategory.length > 0 && allArticleInCategory[i].length} )
                      </Button>
                    );
                  })}
                </List>
              </Category>
            </Sticky>
          </Left>
          <Right theme={{ settings }}>
            {thisIndexCategory >= 0
              ? allArticleInCategory[thisIndexCategory].map((article, index) => {
                  return (
                    index >= parameters.skip &&
                    index < parameters.skip + parameters.limit && (
                      <BoxArticle theme={{ settings }}>
                        <Article type="articleShort" content={{ title: article.tag.title }} parameters={{ to: `/s/s/${article.slug}` }} />
                      </BoxArticle>
                    )
                  );
                })
              : content.articles.map((article, index) => {
                  return (
                    index >= parameters.skip &&
                    index < parameters.skip + parameters.limit && (
                      <BoxArticle theme={{ settings }}>
                        <Article type="articleShort" content={{ title: article.tag.title }} parameters={{ to: `/s/s/${article.slug}` }} />
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
        </Section>
      </>
    );
  }
}

// PropTpyes
sectionCategoryServicesComponent.propTypes = {
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  parameters: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};

// PropTypes default
sectionCategoryServicesComponent.defaultProps = {
  content: null,
  parameters: null,
};

export default sectionCategoryServicesComponent;
