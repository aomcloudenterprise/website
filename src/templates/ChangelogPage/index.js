import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { Wrap, button, Space, text } from 'blocks'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import bem from 'utils/bem'
import './style.sass'

import BlogAside from 'components/BlogAside'

const b = bem.lock('ChangelogPage')

export default class ChangelogPage extends React.Component {
  render() {
    const articles = this.props.pathContext.group.map(({ node }) => node);
    const { pageCount, first, last, index } = this.props.pathContext;

    return (
      <Space both={10}>
        <Wrap>
          <HelmetDatoCms seo={this.props.data.page.seoMetaTags} />
          <div className={b()}>
            <div className={b('title')}>
              <Link to="/changelog/">
                Product Changelog
              </Link>
            </div>
            {
              articles.map((article) => (
                <div key={article.slug} className={b('article')}>
                  <div className={b('article-meta')}>
                    {article.publicationDate}
                  </div>
                  <div className={b('article-body')}>
                    <Link to={`/changelog/${article.slug}/`} className={b('article-title')}>
                      {article.title}
                    </Link>
                    <div className={b('article-categories')}>
                      {
                        article.categories.map(cat => (
                          <div key={cat.name} className={b('article-category')} style={{ backgroundColor: cat.color.hex }}>
                            {cat.name}
                          </div>
                        ))
                      }
                    </div>
                    <div
                      className={b('article-content')}
                      dangerouslySetInnerHTML={{ __html: article.content.markdown.html }}
                    />
                  </div>
                </div>
              ))
            }
            <div className={b('pagination')}>
              {
                !first &&
                  <Link to={index === 2 ? '/changelog/' : `/changelog/${index-1}/`} className={b('previous')}>
                    See next announcements &raquo;
                  </Link>
              }
              {
                !last &&
                  <Link to={`/changelog/${index + 1}/`} className={b('previous')}>
                    &laquo; See previous announcements
                  </Link>
              }
            </div>
          </div>
        </Wrap>
      </Space>
    );
  }
}

export const query = graphql`
query ChangelogPageQuery {
  page: datoCmsChangelog {
    seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }
  }
}
`
