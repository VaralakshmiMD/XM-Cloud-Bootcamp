import React from 'react';
import { RichText as JssRichText, Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  text: Field<string>;
}

type BlogProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const BlogContentDefaultComponent = (props: BlogProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);

export const Default = (props: BlogProps): JSX.Element => {
  if (props.fields) {
    return (
      <div>
        <div className="component-content">
          <div className="promo-text">
            <div>
              <div className="field-promotext">
                <JssRichText field={props.fields.text} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <BlogContentDefaultComponent {...props} />;
};
